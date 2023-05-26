![icon](https://github.com/zirkelc/chrome-debugger-node/assets/950244/6b96d692-a906-4e51-b7d7-1dd3e40d9331)

# Create Chrome Debugger
This tool automates the process of creating a Chrome App Shortcut, configured to launch Chrome in Remote Debugging Mode.

## Why use this tool?
While debugging JavaScript applications using editors such as VSCode, the Chrome browser must be launched with **remote debugging enabled**. This usually involves manually starting the browser from the command line with a specific flag (`--remote-debugging-port=9222`). This tool simplifies this process by creating a readily clickable **Chrome Debugger** app that launches Chrome with the needed command-line flag.

You can find more details about remote debugging in this [post](https://blog.chromium.org/2011/05/remote-debugging-with-chrome-developer.html) on the Chromium blog.

## Demonstration
The following short video shows how to set up the Chrome Debugger and debug a React app from VSCode in no time:

https://github.com/zirkelc/chrome-debugger-node/assets/950244/b079efd2-5edc-4d20-9f82-7cfa233f70c6

## Prerequisites
You must have Google Chrome installed on your machine. The tool assumes Chrome is installed at the following locations:
- macOS: **/Applications/Google Chrome**
- Linux: Support is currently unavailable. We welcome your contributions!
- Windows: Support is currently unavailable. We welcome your contributions!

## Installation
Install and run the package swiftly with `npx`:

```sh
npx create-chrome-debugger
```

Or, install it globally using `npm` and then execute:

```sh
npm install -g create-chrome-debugger
create-chrome-debugger
```

Upon successful installation, a new Chrome Debugger app shortcut will appear in your Application Library. You can relocate it as per your convenience, such as to your Dock.

## How to use it?

### Chrome

Click the Chrome Debugger app to launch a new Chrome instance with remote debugging enabled. Upon first launch, Chrome might prompt to set it as the default browser - this step can be disregarded.

To confirm that remote debugging is enabled, navigate to `chrome://version` in Chrome. It should display like this:

![image](https://github.com/zirkelc/chrome-debugger-node/assets/950244/96143b3a-901a-4d6a-93a2-023bba802bac)

The Chrome instance launched by Chrome Debugger functions in its own user data directory, ensuring isolated history, bookmarks, cookies, etc. It will not interfere with your regular Chrome instance. The user data directory is found at `/Users/<username>/Library/Application Support/Google/Chrome Debugger`.

```sh
# print the location of the user data directory
echo "$HOME/Library/Application Support/Google/Chrome Debugger"
```

### VSCode
For debugging JavaScript apps from VSCode, a debug configuration **launch.json** must be created inside the **.vscode** folder:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Attach to Chrome",
      "port": 9222,
      "request": "attach",
      "type": "chrome",
      "urlFilter": "http://localhost:3000/*",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

For more insights, refer to this [guide](https://dev.to/zirkelc/debug-a-react-app-in-vscode-21ga) or the official [VSCode documentation](https://code.visualstudio.com/docs/editor/debugging).

## Release Notes
- v1.1.x
  - Modified VSCode debug configuration `"type": "pwa-chrome"` to `"type": "chrome"`
  - Added `--user-data-dir` command line flag as recommended by [Chromium](https://blog.chromium.org/2011/05/remote-debugging-with-chrome-developer.html)
- v1.0.x - Initial release


## Acknowledgments
Credit for the initial implementation and the Chrome Debugger icon goes to [David Mann's StackOverflow post](https://stackoverflow.com/questions/51563287/how-to-make-chrome-always-launch-with-remote-debugging-port-flag/58457229#58457229).
