# Create Chrome Debugger
Create a Chrome App Shortcut to Start Google Chrome in Remote Debugging Mode.

## Rationale
In order to debug JavaScript applications from Editors such as VSCode, the Chrome browser must be started with **remote debugging enabled**. However, that's only possible when starting the browser from the command line and appending the flag for the remote debugging port  `--remote-debugging-port=9222`.

This package automates this process by creating a clickable **Chrome Debugger** app that starts the already installed Chrome app with this command line flag.

See this [post](https://blog.chromium.org/2011/05/remote-debugging-with-chrome-developer.html) on the Chromium blog for more information about remote debugging.

## Demo
This short video demonstrates how to setup the Chrome Debugger and to debug a React app from VSCode in just a few seconds.

[![Demo](https://vimeo.com/709988945)](https://vimeo.com/709988945)

## Requirements
Google Chrome must be installed on your machine. The following install locations are assumed:
- macOS: **/Applications/Google Chrome**
- Linux: Currently not supported. Feel free to send a PR!
- Windows: Currently not supported. Feel free to send a PR!

## Install
The package can be easily installed and executed with **NPX**:
```sh
npx create-chrome-debugger
```

Alternatively, it can be installed as a global package with **NPM** and then executed:
```
npm install -g create-chrome-debugger
create-chrome-debugger
```

A new Chrome Debugger app shortcut will be created in your Application Library. You can move it to any other location, for example to your Dock.

## Usage

### Chrome

Click on the new Chrome Debugger app. A new instance of Chrome will be launched with remote debugging enabled. On the first start, Chrome will ask you set it as default browser. You can skip this step.

You can verify that remote debugging is enabled by opening the URL [`chrome://version/`](chrome://version/) in Chrome. It should look like this:

...

The Chrome instance launched by the Chrome Debugger operates in its own user data directory. This means that it has its own history, bookmarks, cookies, etc. and does not interfere with your regular Chrome instance. The user data directory is located at `/Users/<username>/Library/Application Support/Google/Chrome Debugger`.

```sh
# print the location of the user data directory
echo "$HOME/Library/Application Support/Google/Chrome Debugger"
```

### VSCode
In order to debug JavaScript apps from VSCode, a debug configuration **launch.json** must be created inside the **.vscode** folder:
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
For more information please refer to this [post](https://dev.to/zirkelc/debug-a-react-app-in-vscode-21ga).

## Change Log
- v1.1.x
  - Change VSCode debug configuration `"type": "pwa-chrome"` to `"type": "chrome"`
  - Add `--user-data-dir` command line flag as recommended by [Chromium](https://blog.chromium.org/2011/05/remote-debugging-with-chrome-developer.html)
- v1.0.x - Initial release


## Credits
The original implementation and the Chrome Debugger icon come from [David Mann's StackOverflow post](https://stackoverflow.com/questions/51563287/how-to-make-chrome-always-launch-with-remote-debugging-port-flag/58457229#58457229).
