import {createSelector} from '@reduxjs/toolkit';
import {SurvivorState} from './get-slice';

const getGears = createSelector<{survivor: SurvivorState}, any, any>(
  state => state.survivor,
  survivor => survivor?.gears,
);

export default class {
  static getGears = getGears;
}
