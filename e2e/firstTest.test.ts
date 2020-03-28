import { by, device, element, expect } from 'detox'

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('TODO_LIST'))).toBeVisible()
  });
});
