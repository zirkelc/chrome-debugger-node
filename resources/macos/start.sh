#!/usr/bin/env bash

USER_DATA_DIR="$HOME/Library/Application Support/Google/Chrome Debugger"

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir="$USER_DATA_DIR"&
