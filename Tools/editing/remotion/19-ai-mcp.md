# Remotion's Model Context Protocol (MCP)

Use Remotion's MCP server to make your editor's AI Chat better at understanding Remotion. It indexes Remotion's documentation into a vector database using CrawlChat.

> **Test Phase**: Currently open without authentication. May be restricted later.

## Cursor

### One-Click Install

[Install MCP Server](https://cursor.com/en-US/install-mcp?name=remotion-documentation&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyJAcmVtb3Rpb24vbWNwQGxhdGVzdCJdfQ%3D%3D)

### Manual Installation

1. Cursor Settings: `Cmd+Ctrl + P` → `> Cursor Settings`
2. Add MCP:

```json
{
  "mcpServers": {
    "remotion-documentation": {
      "command": "npx",
      "args": ["@remotion/mcp@latest"]
    }
  }
}
```

A green dot should appear when the MCP is active.

## VS Code

### One-Click Install

[Install MCP Server →](vscode:mcp/install?%7B%22name%22%3A%22remotion-documentation%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22%40remotion%2Fmcp%40latest%22%5D%7D)

### Manual Installation

1. `Cmd+Shift+P` → `> MCP: Add Server`
2. Choose **Add from JSON**:

```json
{
  "name": "remotion-documentation",
  "command": "npx",
  "args": ["@remotion/mcp@latest"]
}
```
