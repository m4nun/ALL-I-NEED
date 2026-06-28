# Snapshot file
# Unset all aliases to avoid conflicts with functions
# Functions
__systemd_osc_context_common () 
{ 
    if [ -f /etc/machine-id ]; then
        printf ";machineid=%.36s" "$(< /etc/machine-id)";
    fi;
    printf ";user=%.255s;hostname=%.255s;bootid=%.36s;pid=%.20d" "$USER" "$HOSTNAME" "$(< /proc/sys/kernel/random/boot_id)" "$$"
}
__systemd_osc_context_escape () 
{ 
    echo "$1" | sed -e 's/\\/\\x5c/g' -e 's/;/\\x3b/g' -e 's/[[:cntrl:]]/⍰/g'
}
__systemd_osc_context_precmdline () 
{ 
    local systemd_exitstatus="$?" systemd_signal;
    if [ -n "${systemd_osc_context_cmd_id:-}" ]; then
        if [ "$systemd_exitstatus" -gt 128 ] && systemd_signal=$(kill -l "$systemd_exitstatus" 2>&-); then
            printf "\033]3008;end=%.64s;exit=failure;status=%d;signal=SIG%s\033\\" "$systemd_osc_context_cmd_id" "$systemd_exitstatus" "$systemd_signal";
        else
            if [ "$systemd_exitstatus" -ne 0 ]; then
                printf "\033]3008;end=%.64s;exit=failure;status=%d\033\\" "$systemd_osc_context_cmd_id" $((systemd_exitstatus));
            else
                printf "\033]3008;end=%.64s;exit=success\033\\" "$systemd_osc_context_cmd_id";
            fi;
        fi;
    fi;
    if [ -z "${systemd_osc_context_shell_id:-}" ]; then
        read -r systemd_osc_context_shell_id < /proc/sys/kernel/random/uuid;
    fi;
    printf "\033]3008;start=%.64s%s;type=shell;cwd=%.255s\033\\" "$systemd_osc_context_shell_id" "$(__systemd_osc_context_common)" "$(__systemd_osc_context_escape "$PWD")";
    read -r systemd_osc_context_cmd_id < /proc/sys/kernel/random/uuid
}
__systemd_osc_context_ps0 () 
{ 
    [ -n "${systemd_osc_context_cmd_id:-}" ] || return;
    printf "\033]3008;start=%.64s%s;type=command;cwd=%.255s\033\\" "$systemd_osc_context_cmd_id" "$(__systemd_osc_context_common)" "$(__systemd_osc_context_escape "$PWD")"
}
gawklibpath_append () 
{ 
    [ -z "$AWKLIBPATH" ] && AWKLIBPATH=`gawk 'BEGIN {print ENVIRON["AWKLIBPATH"]}'`;
    export AWKLIBPATH="$AWKLIBPATH:$*"
}
gawklibpath_default () 
{ 
    unset AWKLIBPATH;
    export AWKLIBPATH=`gawk 'BEGIN {print ENVIRON["AWKLIBPATH"]}'`
}
gawklibpath_prepend () 
{ 
    [ -z "$AWKLIBPATH" ] && AWKLIBPATH=`gawk 'BEGIN {print ENVIRON["AWKLIBPATH"]}'`;
    export AWKLIBPATH="$*:$AWKLIBPATH"
}
gawkpath_append () 
{ 
    [ -z "$AWKPATH" ] && AWKPATH=`gawk 'BEGIN {print ENVIRON["AWKPATH"]}'`;
    export AWKPATH="$AWKPATH:$*"
}
gawkpath_default () 
{ 
    unset AWKPATH;
    export AWKPATH=`gawk 'BEGIN {print ENVIRON["AWKPATH"]}'`
}
gawkpath_prepend () 
{ 
    [ -z "$AWKPATH" ] && AWKPATH=`gawk 'BEGIN {print ENVIRON["AWKPATH"]}'`;
    export AWKPATH="$*:$AWKPATH"
}

# setopts 3
set -o braceexpand
set -o hashall
set -o interactive-comments

# aliases 0

# exports 61
declare -x ALACRITTY_LOG="/tmp/Alacritty-120923.log"
declare -x ALACRITTY_SOCKET="/run/user/1000/Alacritty-wayland-1-120923.sock"
declare -x ALACRITTY_WINDOW_ID="94691646694640"
declare -x BUN_INSTALL="~/.bun"
declare -x CODEX_MANAGED_BY_NPM="1"
declare -x CODEX_MANAGED_PACKAGE_ROOT="/usr/lib/node_modules/@openai/codex"
declare -x COLORTERM="truecolor"
declare -x DBUS_SESSION_BUS_ADDRESS="unix:path=/run/user/1000/bus"
declare -x DEBUGINFOD_URLS="https://debuginfod.archlinux.org https://debuginfod.cachyos.org "
declare -x DESKTOP_SESSION="niri"
declare -x DISPLAY=":1"
declare -x ELECTRON_OZONE_PLATFORM_HINT="auto"
declare -x HOME="/home/burapat"
declare -x INVOCATION_ID="4a577873437040f989b65af018985a87"
declare -x JOURNAL_STREAM="9:19740"
declare -x LANG="en_US.UTF-8"
declare -x LC_ADDRESS="th_TH.UTF-8"
declare -x LC_IDENTIFICATION="th_TH.UTF-8"
declare -x LC_MEASUREMENT="th_TH.UTF-8"
declare -x LC_MONETARY="th_TH.UTF-8"
declare -x LC_NAME="th_TH.UTF-8"
declare -x LC_NUMERIC="th_TH.UTF-8"
declare -x LC_PAPER="th_TH.UTF-8"
declare -x LC_TELEPHONE="th_TH.UTF-8"
declare -x LC_TIME="th_TH.UTF-8"
declare -x LOGNAME="burapat"
declare -x MAIL="/var/spool/mail/burapat"
declare -x MANAGERPID="863"
declare -x MANAGERPIDFDID="864"
declare -x MANPAGER="sh -c 'col -bx | bat -l man -p'"
declare -x MANROFFOPT="-c"
declare -x MEMORY_PRESSURE_WATCH="/sys/fs/cgroup/user.slice/user-1000.slice/user@1000.service/session.slice/niri.service/memory.pressure"
declare -x MEMORY_PRESSURE_WRITE="c29tZSAyMDAwMDAgMjAwMDAwMAA="
declare -x MOTD_SHOWN="pam"
declare -x NIRI_SOCKET="/run/user/1000/niri.wayland-1.1038.sock"
declare -x PATH="/home/burapat/.local/bin:/home/burapat/.codex/tmp/arg0/codex-arg0aHbvUa:/usr/lib/node_modules/@openai/codex/node_modules/@openai/codex-linux-x64/vendor/x86_64-unknown-linux-musl/codex-path:/home/burapat/.local/bin:~/.bun/bin:~/.bun/bin:/home/burapat/.bun/bin:/home/burapat/.local/bin:~/.bun/bin:~/.bun/bin:/home/burapat/.bun/bin:/home/burapat/.local/bin:~/.bun/bin:~/.bun/bin:/home/burapat/.bun/bin:/home/burapat/.local/bin:/home/burapat/.cargo/bin:/home/burapat/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/var/lib/flatpak/exports/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl"
declare -x QT_QPA_PLATFORM="wayland"
declare -x QT_QPA_PLATFORMTHEME="gtk3"
declare -x QT_WAYLAND_DISABLE_WINDOWDECORATION="1"
declare -x SHELL="/bin/fish"
declare -x SHLVL="3"
declare -x SYSTEMD_EXEC_PID="1038"
declare -x TERM="xterm-256color"
declare -x USER="burapat"
declare -x VIRTUAL_ENV_DISABLE_PROMPT="1"
declare -x WAYLAND_DISPLAY="wayland-1"
declare -x WINDOWID="94691646694640"
declare -x WINIT_X11_SCALE_FACTOR="1"
declare -x XCURSOR_SIZE="24"
declare -x XCURSOR_THEME="capitaine-cursors"
declare -x XDG_CURRENT_DESKTOP="niri"
declare -x XDG_DATA_DIRS="/home/burapat/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/usr/local/share:/usr/share"
declare -x XDG_RUNTIME_DIR="/run/user/1000"
declare -x XDG_SEAT="seat0"
declare -x XDG_SEAT_PATH="/org/freedesktop/DisplayManager/Seat0"
declare -x XDG_SESSION_CLASS="user"
declare -x XDG_SESSION_DESKTOP="niri"
declare -x XDG_SESSION_ID="3"
declare -x XDG_SESSION_PATH="/org/freedesktop/DisplayManager/Session1"
declare -x XDG_SESSION_TYPE="wayland"
declare -x XDG_VTNR="1"
