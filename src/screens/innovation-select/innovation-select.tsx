import {FooterButtons, Gear, Preview, Screen} from '@components';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import useInnovationSelect from './hooks';

const Component = () => {
  const {props, actions} = useInnovationSelect();

  return (
    <Screen testID="InnovationSelectScreen">
      <Preview
        height="240px"
        imageHeight="360px"
        testID="Preview"
        uri={props.selected?.imageUrl}
      />
      <List>
        <FlatList
          testID="Innovations"
          data={props.data}
          renderItem={({item}) => (
            <Gear
              title={item.name}
              width="100%"
              testID={item.id}
              selected={item.id === props.selected?.id}
              onPress={() => actions.select(item)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </List>
      <FooterButtons confirm={actions.confirm} cancel={actions.cancel} />
    </Screen>
  );
};

const options = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static options = options;
}

const List = styled.View`
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
`;
