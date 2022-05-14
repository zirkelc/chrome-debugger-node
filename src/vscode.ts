export const config = {
  version: '0.2.0',
  configurations: [
    {
      name: 'Attach to Chrome',
      port: 9222,
      request: 'attach',
      type: 'pwa-chrome',
      urlFilter: 'http://localhost:3000/*',
      webRoot: '${workspaceFolder}',
    },
  ],
};
