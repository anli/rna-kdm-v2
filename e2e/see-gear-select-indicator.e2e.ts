import {by, device, element, expect} from 'detox';
import {defineFeature, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./see-gear-select-indicator.feature', {
  loadRelativePath: true,
});

defineFeature(feature, test => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('see gear select indicator at survivors screen', ({
    given,
    when,
    then,
  }) => {
    given('I am any', async () => {});

    given('I am at "Survivors Screen"', async () => {
      await expect(element(by.id('SurvivorsScreen'))).toBeVisible();
    });

    when('I press "first item"', async () => {
      await element(by.id('Gear0')).tap();
    });

    then('I should see "first Item Selected Indicator"', async () => {
      await expect(
        element(by.id('Gear0.Selected').withAncestor(by.id('Gear0'))),
      ).toBeVisible();
    });
  });
});
