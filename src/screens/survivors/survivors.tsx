import React from 'react';
import {IconButton, List} from 'react-native-paper';
import {Gears, Screen} from './components';
import useSurvivors from './hooks';

const Component = () => {
  const {data, actions} = useSurvivors();

  return (
    <Screen testID="SurvivorsScreen">
      <List.Section>
        <List.Item
          title="Gear Grid"
          right={props => (
            <>
              <IconButton
                testID="GearAddButton"
                {...props}
                icon="plus"
                onPress={actions.onGearAdd}
              />
            </>
          )}
        />
        <Gears data={data.gears} onPress={actions.onGearSelect} />
      </List.Section>
    </Screen>
  );
};

const options = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static options = options;
}
