# Create Chrome Debugger
Create a Chrome App Shortcut to Start Google Chrome in Remote Debugging Mode.

## Rationale
In order to debug JavaScript applications from Editors such as VSCode, the browser must be started with **remote debugging enabled**. However, that's only possible when starting the browser from the command line and appending the flag for the remote debugging port, for example _--remote-debugging-port=9222_ in case of Chrome. This package automates this process by creating a clickable Chrome app that starts the already installed browser with this command line flag. 

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

## Usage
The newly created Chrome Debugger app shortcut functions as a replacement for the original app shortcut. It will launch the original Chrome app in remote debugging mode. It's important that you fully quit Chrome before launching it again via the Chrome Debugger shortcut, otherwise Chrome will detect an existing running instance and reuse it instead of creating a new instance. 

### VSCode debug configuration
In order to debug JavaScript apps from VSCode, a debug configuration **launch.json** must be created inside the **.vscode** folder:
```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Attach to Chrome",
			"port": 9222,
			"request": "attach",
			"type": "pwa-chrome",
			"urlFilter": "http://localhost:3000/*",
			"webRoot": "${workspaceFolder}"
		}
	]
}
```
For more information please refer to this [post](https://dev.to/zirkelc/debug-a-react-app-in-vscode-21ga).

## Credits
The original implementation and the Chrome Debugger icon come from [David Mann's StackOverflow post](https://stackoverflow.com/questions/51563287/how-to-make-chrome-always-launch-with-remote-debugging-port-flag/58457229#58457229).