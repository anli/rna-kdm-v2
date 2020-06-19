import {useNavigation} from '@react-navigation/native';
import {RootState} from '@store';
import {SurvivorSelectors, survivorSlice} from '@survivor';
import R from 'ramda';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useSurvivor = () => {
  const [gearSelectedIndex, setGearSelectedIndex] = useState<
    undefined | number
  >(undefined);
  const state = useSelector<RootState, RootState>(res => res);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const data = {
    gears: SurvivorSelectors.getGears(state),
  };

  const gearAdd = () => {
    if (!R.isNil(gearSelectedIndex)) {
      navigate('GearSelectScreen', {index: gearSelectedIndex});
      setGearSelectedIndex(undefined);
    }
  };

  const gearSelect = (index: number) => setGearSelectedIndex(index);

  const gearRemove = () => {
    if (!R.isNil(gearSelectedIndex)) {
      dispatch(
        survivorSlice.actions.setGear({
          item: undefined,
          index: gearSelectedIndex,
        }),
      );
      setGearSelectedIndex(undefined);
    }
  };

  const actions = {
    gearSelect,
    gearAdd,
    gearRemove,
  };

  return {data, actions};
};

export default useSurvivor;
