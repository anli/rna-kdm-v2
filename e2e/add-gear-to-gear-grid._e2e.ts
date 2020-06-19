import {by, device, element, expect} from 'detox';
import {defineFeature, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./add-gear-to-gear-grid.feature', {
  loadRelativePath: true,
});

defineFeature(feature, test => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('default', ({given, when, then}) => {
    given('I am any', async () => {});

    given('data of "First Item" is "None"', async () => {});

    given('I am at "Survivors Screen"', async () => {
      await expect(element(by.id('SurvivorsScreen'))).toBeVisible();
    });

    given('I press "First Gear"', async () => {
      await element(by.text('None'))
        .atIndex(0)
        .tap();
    });

    given('I press "Add Gear"', async () => {
      await element(by.id('GearAddButton')).tap();
    });

    given('I am at "Gear Select Screen"', async () => {
      await expect(element(by.id('GearSelectScreen'))).toBeVisible();
    });

    given('I press "Cloth"', async () => {
      await element(by.text('Cloth')).tap();
    });

    when(/^I press "(.*)"$/, async button => {
      await element(by.text(button)).tap();
    });

    then('I should see "Survivor Screen"', async () => {
      await expect(element(by.id('SurvivorsScreen'))).toBeVisible();
    });

    then(/^I should see "First Item" is "(.*)"$/, async result => {
      await expect(element(by.text(result)).atIndex(0)).toBeVisible();
    });
  });
});