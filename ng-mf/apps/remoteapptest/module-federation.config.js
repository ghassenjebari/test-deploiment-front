module.exports = {
  name: 'remoteapptest',
  exposes: {
    './Module': 'apps/remoteapptest/src/app/remote-entry/entry.module.ts',
  },
};
