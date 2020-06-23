/* istanbul ignore file */

import firestore from '@react-native-firebase/firestore';
import {firestoreDoc$} from '@utils';
import R from 'ramda';
import {StateObservable} from 'redux-observable';
import {filter, map, switchMap} from 'rxjs/operators';
import {default as characterSlices, default as survivorSlices} from './slice';

const load$ = (slice: Slice) => (action$: any) =>
  action$.pipe(
    filter(
      (action: any) =>
        action.type === survivorSlices[slice].actions.load().type,
    ),
    switchMap(() => firestoreDoc$<any>(`${slice}/12032016`)),
    map(data => characterSlices[slice].actions.loadSuccess(data)),
  );

const setGearEpic = (action$: any, state$: StateObservable<any>) =>
  action$.pipe(
    filter((action: any) => getTypeKey(action.type) === 'setGear'),
    switchMap(async (action: any) => {
      const slice = getSliceKey(action.type);
      const gears = R.update(
        action.payload.index,
        action.payload.item,
      )(state$.value[slice].gears);

      const {exists} = await firestore()
        .collection(slice)
        .doc('12032016')
        .get();

      if (exists) {
        await firestore()
          .collection(slice)
          .doc('12032016')
          .update({
            gears,
          });
        return characterSlices[slice].actions.setGearSuccess();
      }

      await firestore()
        .collection(slice)
        .doc('12032016')
        .set({
          gears,
        });
      return characterSlices[slice].actions.setGearSuccess();
    }),
  );

const gearResetEpic = (action$: any) =>
  action$.pipe(
    filter((action: any) => getTypeKey(action.type) === 'gearReset'),
    switchMap(async (action: any) => {
      const slice = getSliceKey(action.type);

      const {exists} = await firestore()
        .collection(slice)
        .doc('12032016')
        .get();

      const gears = [null, null, null, null, null, null, null, null, null];

      if (exists) {
        await firestore()
          .collection(slice)
          .doc('12032016')
          .update({
            gears,
          });
        return characterSlices[slice].actions.setGearSuccess();
      }

      await firestore()
        .collection(slice)
        .doc('12032016')
        .set({
          gears,
        });
      return characterSlices[slice].actions.setGearSuccess();
    }),
  );

export default [
  load$('survivor1'),
  load$('survivor2'),
  load$('survivor3'),
  load$('survivor4'),
  setGearEpic,
  gearResetEpic,
];

type Slice = 'survivor1' | 'survivor2' | 'survivor3' | 'survivor4';

const getSliceKey = (type: string): Slice => {
  const result: any = type.split('/')[0];
  return result;
};

const getTypeKey = (type: string) => {
  return type.split('/')[1];
};
