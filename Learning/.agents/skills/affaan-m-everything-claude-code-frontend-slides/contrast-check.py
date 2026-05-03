#!/usr/bin/env python3
"""
Contrast Validator for HTML Presentations
Checks WCAG 2.1 contrast ratios for text and UI elements.

Usage:
    python3 contrast-check.py path/to/presentation.html

Exit codes:
    0 = all checks pass
    1 = one or more contrast failures detected
"""

import sys
import re
from pathlib import Path

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def relative_luminance(rgb):
    def channel(c):
        c = c / 255.0
        return c / 12.92 if c <= 0.03928 else pow((c + 0.055) / 1.055, 2.4)
    r, g, b = rgb
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)

def contrast_ratio(fg, bg):
    l1 = relative_luminance(fg) + 0.05
    l2 = relative_luminance(bg) + 0.05
    return max(l1, l2) / min(l1, l2)

def parse_rgba(rgba_str, bg_rgb):
    m = re.match(r'rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)', rgba_str)
    if not m:
        return None
    r, g, b = int(m.group(1)), int(m.group(2)), int(m.group(3))
    a = float(m.group(4)) if m.group(4) else 1.0
    br, bg_, bb = bg_rgb
    nr = round(a * r + (1 - a) * br)
    ng = round(a * g + (1 - a) * bg_)
    nb = round(a * b + (1 - a) * bb)
    return (nr, ng, nb)

def resolve_color(value, css_vars, bg_rgb=None):
    value = value.strip()
    if value.startswith('#'):
        return hex_to_rgb(value)
    if value.startswith('var(--'):
        var_name = value[6:-1]
        if var_name in css_vars:
            return resolve_color(css_vars[var_name], css_vars, bg_rgb)
        return None
    if value.startswith('rgba') or value.startswith('rgb'):
        if bg_rgb:
            return parse_rgba(value, bg_rgb)
        return None
    if value in css_vars:
        return resolve_color(css_vars[value], css_vars, bg_rgb)
    return None

def extract_css_vars(css_text):
    vars = {}
    root_match = re.search(r':root\s*\{([^}]+)\}', css_text, re.DOTALL)
    if root_match:
        for item in re.finditer(r'(--[\w-]+)\s*:\s*([^;]+)', root_match.group(1)):
            vars[item.group(1).lstrip('-')] = item.group(2).strip()
    return vars

def extract_declarations(css_text):
    results = []
    for block in re.finditer(r'([^{]+)\{([^}]+)\}', css_text):
        selectors = [s.strip() for s in block.group(1).split(',')]
        declarations = block.group(2)
        for decl in re.finditer(r'([\w-]+)\s*:\s*([^;]+)', declarations):
            prop = decl.group(1).strip()
            val = decl.group(2).strip()
            for sel in selectors:
                results.append((sel, prop, val))
    return results

def specificity(selector):
    """Simple specificity: count IDs, classes, elements."""
    ids = selector.count('#')
    classes = len(re.findall(r'[.:[\[]', selector))
    elements = len(re.findall(r'[a-zA-Z]+', selector)) - classes
    return (ids, classes, elements)

def is_large_text_selector(selector):
    large_patterns = ['stat-number', 'h1', 'h2', 'h3', 'title']
    return any(p in selector.lower() for p in large_patterns)

def main():
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <presentation.html>")
        sys.exit(1)

    html_path = Path(sys.argv[1])
    if not html_path.exists():
        print(f"File not found: {html_path}")
        sys.exit(1)

    html = html_path.read_text()
    
    style_blocks = re.findall(r'<style[^>]*>(.*?)</style>', html, re.DOTALL)
    css_text = '\n'.join(style_blocks)
    css_vars = extract_css_vars(css_text)
    
    dark_bg = resolve_color('var(--black)', css_vars) or (10, 10, 10)
    white_bg = resolve_color('var(--white)', css_vars) or (255, 255, 255)
    
    all_decls = extract_declarations(css_text)
    
    # Group by (property, normalized selector target)
    # Skip backgrounds and self-selectors
    skip_props = {'background', 'background-color'}
    skip_selectors = {'body', 'html', '.slide-dark', '.slide-white', '.slide'}
    
    # Build lookup: for each target class/property, find the most specific rule
    def get_target(selector):
        """Extract the target class from a selector."""
        # Remove pseudo-classes and pseudo-elements
        s = re.sub(r'::?[\w-]+', '', selector)
        # Get the last class or element
        parts = [p.strip() for p in s.split() if p.strip()]
        if not parts:
            return selector
        return parts[-1]
    
    # Build background map for selectors that have their own background
    backgrounds = {}
    for selector, prop, val in all_decls:
        if prop in ('background', 'background-color'):
            backgrounds[selector] = val
    
    def effective_bg(selector, slide_bg):
        """Blend selector's own background with slide background."""
        if selector in backgrounds:
            bg = resolve_color(backgrounds[selector], css_vars, slide_bg)
            if bg:
                return bg
        return slide_bg
    
    # Filter relevant declarations
    relevant = []
    for selector, prop, val in all_decls:
        if prop in skip_props:
            continue
        if selector in skip_selectors:
            continue
        if prop not in ('color', 'border-color', 'border-left-color', 'border-right-color', 'border-top-color', 'border-bottom-color'):
            continue
        # Skip decorative card borders
        if '.card' in selector and 'border' in prop and 'rgba(0,0,0,0.0' in val:
            continue
        relevant.append((selector, prop, val))
    
    # For each theme, only check the most specific rule per target
    def get_effective_rules(theme_prefix, bg_rgb):
        """Get effective rules for a theme, considering specificity."""
        effective = {}
        for selector, prop, val in relevant:
            # Check if this rule applies to the theme
            if theme_prefix in selector:
                # This is a theme-specific rule
                target = f"{get_target(selector)}::{prop}"
                spec = specificity(selector)
                if target not in effective or spec > effective[target][0]:
                    effective[target] = (spec, selector, prop, val)
            elif not any(t in selector for t in ('.slide-dark', '.slide-white')):
                # Global rule - only add if no theme-specific override exists
                target = f"{get_target(selector)}::{prop}"
                spec = specificity(selector)
                # Check if a theme-specific rule already covers this
                has_override = False
                for s2, p2, v2 in relevant:
                    if theme_prefix in s2 and p2 == prop and get_target(s2) == get_target(selector):
                        if specificity(s2) >= spec:
                            has_override = True
                            break
                if not has_override:
                    if target not in effective or spec > effective[target][0]:
                        effective[target] = (spec, selector, prop, val)
        return list(effective.values())
    
    print("=" * 70)
    print("CONTRAST VALIDATION REPORT")
    print(f"File: {html_path}")
    print("=" * 70)
    print()
    
    failures = 0
    
    def check(name, fg_val, bg_rgb, selector, is_large=False):
        nonlocal failures
        eff_bg = effective_bg(selector, bg_rgb)
        fg = resolve_color(fg_val, css_vars, eff_bg)
        if not fg:
            return
        ratio = contrast_ratio(fg, eff_bg)
        threshold = 3.0 if is_large else 4.5
        status = "PASS" if ratio >= threshold else "FAIL"
        if status == "FAIL":
            failures += 1
        tag = "LARGE" if is_large else "TEXT"
        print(f"  {name:48s} {ratio:5.2f}:1  [{tag}] [{status}]")
    
    print("DARK SLIDE THEME (bg #0a0a0a)")
    print("-" * 70)
    for spec, selector, prop, val in get_effective_rules('.slide-dark', dark_bg):
        is_large = is_large_text_selector(selector)
        check(f"{prop} in {selector[:38]}", val, dark_bg, selector, is_large)
    
    print()
    print("WHITE SLIDE THEME (bg #ffffff)")
    print("-" * 70)
    for spec, selector, prop, val in get_effective_rules('.slide-white', white_bg):
        is_large = is_large_text_selector(selector)
        check(f"{prop} in {selector[:38]}", val, white_bg, selector, is_large)
    
    print()
    print("=" * 70)
    if failures == 0:
        print("ALL CHECKS PASSED")
    else:
        print(f"FAILURES: {failures} color combination(s) below WCAG AA")
    print("=" * 70)
    
    sys.exit(1 if failures > 0 else 0)

if __name__ == '__main__':
    main()
