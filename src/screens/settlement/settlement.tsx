import {Gear, Screen} from '@components';
import React from 'react';
import {List} from 'react-native-paper';
import styled from 'styled-components/native';
import useSettlement from './hooks';

const Component = () => {
  const {props, actions} = useSettlement();

  return (
    <Screen testID="SettlementScreen">
      <List.Section>
        <List.Item testID="Principles" title="Principles" />
        <Principles>
          <Gear
            selected={false}
            testID="Principle.newLife"
            width="45%"
            title={props.newLife}
            subtitle="New Life"
            onPress={() => actions.principleSelected('newLife')}
          />
          <Gear
            selected={false}
            testID="Principle.death"
            width="45%"
            title={props.death}
            subtitle="Death"
            onPress={() => actions.principleSelected('death')}
          />
          <Gear
            selected={false}
            testID="Principle.conviction"
            width="45%"
            title={props.conviction}
            subtitle="Conviction"
            onPress={() => actions.principleSelected('conviction')}
          />
          <Gear
            selected={false}
            testID="Principle.society"
            width="45%"
            title={props.society}
            subtitle="Society"
            onPress={() => actions.principleSelected('society')}
          />
        </Principles>
      </List.Section>
    </Screen>
  );
};

const options = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static options = options;
}

const Principles = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
