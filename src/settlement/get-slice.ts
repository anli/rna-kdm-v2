import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PrincipleValue {
  id: string;
  name: string;
  imageUrl: string;
}

export type PrincipleId = 'newLife' | 'death' | 'conviction' | 'society';

export interface SettlementState {
  principles?: {[key in PrincipleId]?: PrincipleValue};
  innovations?: string[];
  locations?: string[];
  weaponSpecializations?: string[];
}

/* istanbul ignore next */
const getSettlementSlice = (initialState: SettlementState) =>
  createSlice({
    name: 'settlement',
    initialState,
    reducers: {
      setPrinciple: (
        _: SettlementState,
        __: PayloadAction<{id: string; item?: PrincipleValue}>,
      ) => {},
      setPrincipleSuccess: () => {},
      load: () => {},
      loadSuccess: (_: SettlementState, action: PayloadAction<any>) => {
        if (action.payload) {
          return action.payload;
        }
      },
      principleReset: () => {},
      principleResetSuccess: () => {},
      innovationReset: () => {},
      innovationResetSuccess: () => {},
      innovationSet: (_: SettlementState, __: PayloadAction<string[]>) => {},
      innovationSetSuccess: () => {},
      innovationRemove: (_: SettlementState, __: PayloadAction<string>) => {},
      innovationRemoveSuccess: () => {},
      settlementEventDraw: () => {},
      settlementEventDrawSuccess: () => {},
      locationAdd: (_: SettlementState, __: PayloadAction<string[]>) => {},
      locationAddSuccess: () => {},
      locationReset: () => {},
      locationResetSuccess: () => {},
      locationRemove: (_: SettlementState, __: PayloadAction<string>) => {},
      locationRemoveSuccess: () => {},
      weaponSpecializationAdd: (
        _: SettlementState,
        __: PayloadAction<string[]>,
      ) => {},
      weaponSpecializationAddSuccess: () => {},
      weaponSpecializationReset: () => {},
      weaponSpecializationResetSuccess: () => {},
      weaponSpecializationRemove: (
        _: SettlementState,
        __: PayloadAction<string>,
      ) => {},
      weaponSpecializationRemoveSuccess: () => {},
    },
  });

export default getSettlementSlice;
