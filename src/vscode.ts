/**
 * VSCode configuration for debugging.
 * @see https://code.visualstudio.com/docs/editor/debugging#_launch-configurations
 */
export const config = {
  version: '0.2.0',
  configurations: [
    {
      name: 'Attach to Chrome',
      port: 9222,
      request: 'attach',
      type: 'chrome',
      urlFilter: 'http://localhost:3000/*',
      webRoot: '${workspaceFolder}',
    },
  ],
};
