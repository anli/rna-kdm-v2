import {FooterButtons, Gear, Preview, Screen} from '@components';
import React from 'react';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {List, Searchbar} from 'react-native-paper';
import {SectionGrid} from 'react-native-super-grid';
import styled from 'styled-components/native';
import useGearSelect from './hooks';

const Component = () => {
  const {data, actions} = useGearSelect();
  return (
    <Screen testID="GearSelectScreen">
      <Searchbar
        testID="SearchField"
        placeholder="Search"
        onChangeText={actions.search}
        value={data.searchText}
      />
      <HideWithKeyboard>
        <Preview testID="Preview" uri={data.selected?.imageUrl} />
      </HideWithKeyboard>
      <Section>
        <SectionGrid<any>
          itemDimension={130}
          sections={data?.gears}
          renderItem={({item}) => {
            const isSelected = data.selected && data.selected.id === item.id;
            return (
              <Gear
                selected={isSelected}
                testID={`Gear.${item.id}`}
                width="100%"
                key={item.id}
                subtitle={item.name}
                onPress={() => actions.select(item)}
                top={item?.top}
                left={item?.left}
                bottom={item?.bottom}
                right={item?.right}
              />
            );
          }}
          renderSectionHeader={({section}) => (
            <List.Subheader>{section.title}</List.Subheader>
          )}
        />
      </Section>
      <FooterButtons confirm={actions.confirm} cancel={actions.cancel} />
    </Screen>
  );
};

const options = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static options = options;
}

const Section = styled(List.Section)`
  flex: 1;
`;
