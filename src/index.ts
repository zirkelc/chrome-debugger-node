#!/usr/bin/env node
import os from "os";
import fs from "fs";
import path from "path";
import chalk from 'chalk';

/**
 * Structure of a macOS Application Bundle
 * https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/BundleTypes/BundleTypes.html#//apple_ref/doc/uid/10000123i-CH101-SW19
 * MyApp.app/
 * 	Contents/
 *  	Info.plist
 *    MacOS/
 *    Resources/
 */
// directories
const appName = 'Chrome\ Debugger';
const bundleDir = path.join(os.homedir(), 'Applications', `${appName}.app`);
const contentsDir = path.join(bundleDir, 'Contents');
const macosDir = path.join(contentsDir, 'MacOS');
const resourcesDir = path.join(contentsDir, 'Resources');

// files
const executableFile = path.join(macosDir, appName);
const infoPlistFile = path.join(contentsDir, 'Info.plist');
const iconFile = path.join(resourcesDir, 'icon.icns');

try {
	// create MacOS dir
	if (!fs.existsSync(macosDir)) {
		fs.mkdirSync(macosDir, { recursive: true });
	}

	// create Resources dir
	if (!fs.existsSync(resourcesDir)) {
		fs.mkdirSync(resourcesDir, { recursive: true });
	}

	// copy property list to Contents
	fs.copyFileSync('resources/Info.plist', infoPlistFile);

	// copy icon to Resources
	fs.copyFileSync('resources/icon.png', iconFile);

	// copy executable shell script to MacOS
	fs.copyFileSync('resources/executable.bash', executableFile);

	// make it executable
	fs.chmodSync(executableFile, '775');

	console.log(chalk.green(`Created Chrome Debugger at ${chalk.underline(bundleDir)}`));
} catch (error) {
	console.log(chalk.red('ERROR'), error);
}