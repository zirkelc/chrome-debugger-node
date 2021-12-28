#!/usr/bin/env node
import chalk from 'chalk';
import { createApp } from './macos';

const { platform } = process;

if (platform === 'darwin') {
  createApp();
} else {
  console.log(
    chalk.yellow('WARN'),
    `Platform ${platform} is not supported yet! Please file an issue or pull request on the GitHub repo!`,
  );
}
