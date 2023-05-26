import os from 'os';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import util from 'util';
import { config } from './vscode.js';

export function createApp(): void {
  /**
   * Structure of a macOS Application Bundle
   * https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/BundleTypes/BundleTypes.html#//apple_ref/doc/uid/10000123i-CH101-SW19
   * MyApp.app/
   * 	Contents/
   *  	Info.plist
   *    MacOS/
   *    Resources/
   */
  const appName = 'Chrome Debugger';
  const appDir = '/Applications';
  const bundleDir = path.join(appDir, `${appName}.app`);
  const contentsDir = path.join(bundleDir, 'Contents');
  const macosDir = path.join(contentsDir, 'MacOS');
  const resourcesDir = path.join(contentsDir, 'Resources');

  // macOS bundle destination files
  const executableFile = path.join(macosDir, appName);
  const infoPlistFile = path.join(contentsDir, 'Info.plist');
  const iconFile = path.join(resourcesDir, 'icon.icns');

  // local macos resources directory
  const localResourcesDir = path.resolve(__dirname, '..', 'resources', 'macos');

  if (fs.existsSync(bundleDir)) {
    console.log(
      chalk.yellow(
        `App ${chalk.yellow.bold(appName)} at ${chalk.yellow.bold(
          appDir,
        )} already exists. Delete it manuallay and start again!`,
      ),
    );
    return;
  }

  try {
    // create MacOS dir
    fs.mkdirSync(macosDir, { recursive: true });

    // create Resources dir
    fs.mkdirSync(resourcesDir, { recursive: true });

    // copy info property list to Contents
    fs.copyFileSync(path.join(localResourcesDir, 'Info.plist'), infoPlistFile);

    // copy icon to Resources
    fs.copyFileSync(path.join(localResourcesDir, 'icon.png'), iconFile);

    // copy executable shell script to MacOS
    fs.copyFileSync(path.join(localResourcesDir, 'start.sh'), executableFile);

    // make it executable
    fs.chmodSync(executableFile, '775');

    console.log(`Created ${chalk.green.bold(appName)} at ${chalk.green.bold(appDir)}`);
    console.log(`Quit Chrome completely and start it again with the new Chrome Debugger to enable remote debugging!\n`);

    console.log(`Add this VSCode debug config to ${chalk.underline('.vscode/launch.json')} in your project:`);
    console.log(JSON.stringify(config, null, 2));

    console.log(`\nHappy debugging!`);
  } catch (error) {
    console.error(error);
  }
}
