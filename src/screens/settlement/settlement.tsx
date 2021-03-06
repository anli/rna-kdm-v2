import {Gear, Preview, Screen} from '@components';
import React from 'react';
import {ScrollView} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import styled from 'styled-components/native';
import useSettlement from './hooks';

type PrincipleKey = 'newLife' | 'death' | 'conviction' | 'society';

const PRINCIPLES: {label: string; key: PrincipleKey}[] = [
  {label: 'New Life', key: 'newLife'},
  {label: 'Death', key: 'death'},
  {label: 'Conviction', key: 'conviction'},
  {label: 'Society', key: 'society'},
];

const Component = () => {
  const {props, actions} = useSettlement();

  return (
    <Screen testID="SettlementScreen">
      <Preview
        height="240px"
        testID="Preview"
        uri={props.preview?.imageUrl}
        imageHeight="360px"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        testID="SettlementScreen.ScrollView">
        <List.Section>
          <List.Item
            testID="Principles"
            title="Principles"
            right={itemProps => (
              <>
                <IconButton
                  testID="PrincipleResetButton"
                  {...itemProps}
                  icon="sync"
                  onPress={actions.principleReset}
                />
                <IconButton
                  testID="PrincipleRemoveButton"
                  {...itemProps}
                  icon="delete"
                  onPress={actions.principleRemove}
                />
                <IconButton
                  testID="PrincipleSetButton"
                  {...itemProps}
                  icon="plus"
                  onPress={actions.principleSet}
                />
              </>
            )}
          />
          <Principles>
            {PRINCIPLES.map(principle => (
              <Gear
                key={principle.key}
                selected={principle.key === props.principleSelectedId}
                testID={`Principle.${principle.key}`}
                width="45%"
                subtitle={props.principles[principle.key]?.name || 'None'}
                title={principle.label}
                onPress={() =>
                  actions.principleSelected(
                    principle.key,
                    props.principles[principle.key],
                  )
                }
              />
            ))}
          </Principles>
        </List.Section>

        <List.Section>
          <List.Item
            testID="Innovations"
            title="Innovations"
            right={itemProps => (
              <>
                <IconButton
                  testID="InnovationResetButton"
                  {...itemProps}
                  icon="sync"
                  onPress={actions.innovationReset}
                />
                <IconButton
                  testID="InnovationRemoveButton"
                  {...itemProps}
                  icon="delete"
                  onPress={actions.innovationRemove}
                />
                <IconButton
                  testID="InnovationAddButton"
                  {...itemProps}
                  icon="plus"
                  onPress={actions.innovationAdd}
                />
                <IconButton
                  testID="InnovationDrawButton"
                  {...itemProps}
                  icon="star"
                  onPress={actions.innovationDraw}
                />
              </>
            )}
          />
          <Innovations horizontal showsHorizontalScrollIndicator={false}>
            {props.innovations.map(innovation => (
              <Gear
                key={innovation.id}
                selected={innovation.id === props.innovationSelectedId}
                testID={`Innovation.${innovation.id}`}
                width="120px"
                subtitle={innovation.name}
                onPress={() =>
                  actions.innovationSelected(innovation.id, innovation)
                }
              />
            ))}
          </Innovations>
        </List.Section>

        <List.Section>
          <List.Item
            testID="SettlementEvent"
            title="Events"
            description={props.event?.name}
            right={itemProps => (
              <>
                <IconButton
                  testID="SettlementEventDrawButton"
                  {...itemProps}
                  icon="star"
                  onPress={actions.settlementEventDraw}
                />
              </>
            )}
            onPress={actions.settlementEventView}
          />
        </List.Section>
        <List.Section>
          <List.Item
            testID="SettlementLocations"
            title="Locations"
            right={itemProps => (
              <>
                <IconButton
                  testID="LocationResetButton"
                  {...itemProps}
                  icon="sync"
                  onPress={actions.locationReset}
                />
                <IconButton
                  testID="LocationRemoveButton"
                  {...itemProps}
                  icon="delete"
                  onPress={actions.locationRemove}
                />
                <IconButton
                  testID="LocationAddButton"
                  {...itemProps}
                  icon="plus"
                  onPress={actions.locationAdd}
                />
              </>
            )}
          />
        </List.Section>
        <Innovations horizontal showsHorizontalScrollIndicator={false}>
          {props.locations.map(location => (
            <Gear
              key={location.id}
              selected={location.id === props.locationSelectedId}
              testID={`Location.${location.id}`}
              width="120px"
              subtitle={location.name}
              onPress={() => actions.locationSelected(location.id, location)}
            />
          ))}
        </Innovations>
        <List.Section>
          <List.Item
            title="Weapon Specialization"
            right={itemProps => (
              <>
                <IconButton
                  testID="WeaponSpecializationResetButton"
                  {...itemProps}
                  icon="sync"
                  onPress={actions.weaponSpecializationReset}
                />
                <IconButton
                  testID="WeaponSpecializationRemoveButton"
                  {...itemProps}
                  icon="delete"
                  onPress={actions.weaponSpecializationRemove}
                />
                <IconButton
                  testID="WeaponSpecializationAddButton"
                  {...itemProps}
                  icon="plus"
                  onPress={actions.weaponSpecializationAdd}
                />
              </>
            )}
          />
        </List.Section>
        <Innovations horizontal showsHorizontalScrollIndicator={false}>
          {props.weaponSpecializations.map(weaponSpecialization => (
            <Gear
              key={weaponSpecialization.id}
              selected={
                weaponSpecialization.id === props.weaponSpecializationSelectedId
              }
              testID={`WeaponSpecialization.${weaponSpecialization.id}`}
              width="120px"
              subtitle={weaponSpecialization.name}
              onPress={() =>
                actions.weaponSpecializationSelected(
                  weaponSpecialization.id,
                  weaponSpecialization,
                )
              }
            />
          ))}
        </Innovations>
      </ScrollView>
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

const Innovations = styled.ScrollView`
  margin-left: 16px;
`;
