import {Preview, Screen} from '@components';
import React from 'react';
import {IconButton, List} from 'react-native-paper';
import {Gears} from './components';
import useSurvivors from './hooks';

const Component = () => {
  const {data, actions} = useSurvivors();

  return (
    <Screen testID={`${data.slice}Screen`}>
      <Preview testID="Preview" uri={data.preview?.imageUrl} />
      <List.Section>
        <List.Item
          testID={`${data.slice}GearGrid`}
          title="Gear Grid"
          right={props => (
            <>
              <IconButton
                testID="GearResetButton"
                {...props}
                icon="sync"
                onPress={actions.gearReset}
              />
              <IconButton
                testID="GearRemoveButton"
                {...props}
                icon="delete"
                onPress={actions.gearRemove}
              />
              <IconButton
                testID="GearAddButton"
                {...props}
                icon="plus"
                onPress={actions.gearAdd}
              />
            </>
          )}
        />
        <Gears
          data={data.gears}
          onPress={actions.gearSelect}
          selectedIndex={data.gearSelectedIndex}
        />
      </List.Section>
    </Screen>
  );
};

const options = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static options = options;
}
