import {mockNavigate} from '@mocks';
import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {getSettlementSlice} from '@settlement';
import {render} from '@test';
import {defineFeature, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import {fireEvent, RenderAPI} from 'react-native-testing-library';
import * as redux from 'react-redux';
import SettlementScreen from './settlement';

const feature = loadFeature('./e2e/remove-active-innovation.feature');

defineFeature(feature, test => {
  let component: RenderAPI;
  let store: EnhancedStore<any>;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    mockNavigate.mockReset();
    jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);
    mockDispatch.mockReset();
  });

  test('remove active innovation', ({given, when, then}) => {
    given('I am any', async () => {});
    given('data of "Active Innovations" is "Language"', async () => {
      store = configureStore({
        reducer: {
          settlement: getSettlementSlice({
            principles: {
              newLife: undefined,
              death: undefined,
              conviction: undefined,
              society: undefined,
            },
            innovations: ['language'],
          }).reducer,
        },
      });
    });
    given('I am at "Settlement Screen"', async () => {
      component = render(<SettlementScreen.Component />, store);
    });
    when('I press "Language"', async () => {
      fireEvent.press(component.getByTestId('InnovationRemoveButton'));
      fireEvent.press(component.getByText('Language'));
    });
    when('I press "Innovation Remove Button"', async () => {
      fireEvent.press(component.getByTestId('InnovationRemoveButton'));
    });
    then('I should see "No Language"', async () => {
      expect(mockDispatch).toHaveBeenLastCalledWith({
        payload: 'language',
        type: 'settlement/innovationRemove',
      });
    });
  });
});
