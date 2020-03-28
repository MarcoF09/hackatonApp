/* eslint-disable @typescript-eslint/ban-ts-ignore */
import detox, { device } from 'detox'
import adapter from 'detox/runners/jest/adapter'
import specReporter from 'detox/runners/jest/specReporter'

const config = require('../package.json').detox;

jest.setTimeout(120000);

// @ts-ignore
jasmine.getEnv().addReporter(adapter);
// @ts-ignore
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
  await detox.init(config);
}, 300000);

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await device.terminateApp()
  await device.uninstallApp()
  await detox.cleanup();
});
