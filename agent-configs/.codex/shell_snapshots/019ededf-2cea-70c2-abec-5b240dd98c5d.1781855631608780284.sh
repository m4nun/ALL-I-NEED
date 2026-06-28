# Snapshot file
# Unset all aliases to avoid conflicts with functions
# Functions
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

# exports 109
declare -x ALACRITTY_LOG="/tmp/Alacritty-120923.log"
declare -x ALACRITTY_SOCKET="/run/user/1000/Alacritty-wayland-1-120923.sock"
declare -x ALACRITTY_WINDOW_ID="94691646694640"
declare -x BUN_INSTALL="~/.bun"
declare -x CODEX_CI="1"
declare -x CODEX_MANAGED_BY_NPM="1"
declare -x CODEX_MANAGED_PACKAGE_ROOT="/usr/lib/node_modules/@openai/codex"
declare -x CODEX_THREAD_ID="019ede7c-2a7c-7270-9d9c-4f445931d9ec"
declare -x COLORTERM=""
declare -x DBUS_SESSION_BUS_ADDRESS="unix:path=/run/user/1000/bus"
declare -x DEBUGINFOD_URLS="https://debuginfod.archlinux.org https://debuginfod.cachyos.org "
declare -x DESKTOP_SESSION="niri"
declare -x DISPLAY=":1"
declare -x ELECTRON_OZONE_PLATFORM_HINT="auto"
declare -x GH_PAGER="cat"
declare -x GIT_PAGER="cat"
declare -x HOME="/home/burapat"
declare -x INIT_CWD="/home/burapat/open-design"
declare -x INVOCATION_ID="4a577873437040f989b65af018985a87"
declare -x JOURNAL_STREAM="9:19740"
declare -x LANG="C.UTF-8"
declare -x LC_ADDRESS="th_TH.UTF-8"
declare -x LC_ALL="C.UTF-8"
declare -x LC_CTYPE="C.UTF-8"
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
declare -x NODE="/home/burapat/.local/share/open-design/node-v24.17.0-linux-x64/bin/node"
declare -x NODE_PATH="/home/burapat/open-design/node_modules/.pnpm/node_modules"
declare -x NO_COLOR="1"
declare -x OD_BIN="/home/burapat/open-design/apps/daemon/dist/cli.js"
declare -x OD_DAEMON_URL="http://127.0.0.1:35163"
declare -x OD_DATA_DIR="/home/burapat/open-design/.od"
declare -x OD_NODE_BIN="/home/burapat/.local/share/open-design/node-v24.17.0-linux-x64/bin/node"
declare -x OD_PORT="35163"
declare -x OD_PROJECT_DIR="/home/burapat/open-design/.od/projects/eb57dbdf-7c9a-4e21-8a31-aec91edd3689"
declare -x OD_PROJECT_ID="eb57dbdf-7c9a-4e21-8a31-aec91edd3689"
declare -x OD_SIDECAR_BASE="/home/burapat/open-design/.tmp/tools-dev"
declare -x OD_SIDECAR_IPC_PATH="/tmp/open-design/ipc/default/daemon.sock"
declare -x OD_SIDECAR_NAMESPACE="default"
declare -x OD_SIDECAR_SOURCE="tools-dev"
declare -x OD_TOOL_TOKEN="odtt_eLtYXfGHiz8Cq5PNb3R7ZNqJd4fq-F15UgNxAXjQB_o"
declare -x OD_WEB_PORT="40555"
declare -x PAGER="cat"
declare -x PATH="/home/burapat/.local/bin:/home/burapat/.codex/tmp/arg0/codex-arg0jkrA5S:/usr/lib/node_modules/@openai/codex/node_modules/@openai/codex-linux-x64/vendor/x86_64-unknown-linux-musl/codex-path:/home/burapat/.local/share/open-design/node-v24.17.0-linux-x64/bin:/usr/bin:./node_modules/.bin:/home/burapat/open-design/node_modules/.bin:/home/burapat/.local/share/pnpm/store/v11/links/@/pnpm/10.33.2/23bda7ffb945bd7449a04e2991f336b36447afbbf10ccd57275d7a23ef5ca278/node_modules/pnpm/dist/node-gyp-bin:/home/burapat/.local/share/pnpm/store/v11/links/@/pnpm/10.33.2/23bda7ffb945bd7449a04e2991f336b36447afbbf10ccd57275d7a23ef5ca278/bin:/home/burapat/.local/share/open-design/node24/bin:/home/burapat/.local/bin:/home/burapat/.codex/tmp/arg0/codex-arg0aHbvUa:/usr/lib/node_modules/@openai/codex/node_modules/@openai/codex-linux-x64/vendor/x86_64-unknown-linux-musl/codex-path:~/.bun/bin:/home/burapat/.bun/bin:/home/burapat/.cargo/bin:/usr/local/sbin:/usr/local/bin:/var/lib/flatpak/exports/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl:/home/burapat/.vite-plus/bin:/home/burapat/.kimi-code/bin:/home/burapat/.opencode/bin:/home/burapat/.volta/bin:/home/burapat/.asdf/shims:/home/burapat/Library/pnpm:/home/burapat/.npm-global/bin:/home/burapat/.npm-packages/bin:/home/burapat/.deno/bin:/home/burapat/go/bin:/home/burapat/.pyenv/shims:/home/burapat/.local/share/mise/shims:/home/burapat/.mise/shims:/opt/homebrew/bin"
declare -x PNPM_PACKAGE_NAME="open-design"
declare -x PNPM_SCRIPT_SRC_DIR="/home/burapat/open-design"
declare -x QT_QPA_PLATFORM="wayland"
declare -x QT_QPA_PLATFORMTHEME="gtk3"
declare -x QT_WAYLAND_DISABLE_WINDOWDECORATION="1"
declare -x SHELL="/bin/fish"
declare -x SHLVL="3"
declare -x SYSTEMD_EXEC_PID="1038"
declare -x TERM="dumb"
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
declare -x npm_command="exec"
declare -x npm_config__jsr_registry="https://npm.jsr.io/"
declare -x npm_config_frozen_lockfile=""
declare -x npm_config_globalconfig="/home/burapat/.config/pnpm/rc"
declare -x npm_config_manage_package_manager_versions=""
declare -x npm_config_node_gyp="/home/burapat/.local/share/pnpm/store/v11/links/@/pnpm/10.33.2/23bda7ffb945bd7449a04e2991f336b36447afbbf10ccd57275d7a23ef5ca278/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js"
declare -x npm_config_npm_globalconfig="/home/burapat/.local/share/open-design/node-v24.17.0-linux-x64/etc/npmrc"
declare -x npm_config_overrides="{\"brace-expansion\":\"5.0.6\",\"devalue\":\"5.8.1\",\"fast-uri\":\"3.1.2\",\"hono\":\"4.12.19\",\"ip-address\":\"10.2.0\",\"postcss\":\"8.5.15\",\"protobufjs\":\"8.4.0\",\"qs\":\"6.15.2\",\"tmp\":\"0.2.7\",\"yaml\":\"2.9.0\"}"
declare -x npm_config_registry="https://registry.npmjs.org/"
declare -x npm_config_user_agent="pnpm/10.33.2 npm/? node/v24.17.0 linux x64"
declare -x npm_config_verify_deps_before_run="false"
declare -x npm_execpath="/home/burapat/.local/share/pnpm/store/v11/links/@/pnpm/10.33.2/23bda7ffb945bd7449a04e2991f336b36447afbbf10ccd57275d7a23ef5ca278/node_modules/pnpm/bin/pnpm.cjs"
declare -x npm_lifecycle_event="tools-dev"
declare -x npm_lifecycle_script="pnpm exec tools-dev start web"
declare -x npm_node_execpath="/home/burapat/.local/share/open-design/node-v24.17.0-linux-x64/bin/node"
declare -x npm_package_bin_od="./apps/daemon/bin/od.mjs"
declare -x npm_package_engines_node="~24"
declare -x npm_package_engines_pnpm=">=10.33.2 <11"
declare -x npm_package_json="/home/burapat/open-design/package.json"
declare -x npm_package_name="open-design"
declare -x npm_package_version="0.11.0"
declare -x pnpm_config_verify_deps_before_run="false"
