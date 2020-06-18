import {useNavigation} from '@react-navigation/native';
import {RootState} from '@store';
import {SurvivorSelectors} from '@survivor';
import {useState} from 'react';
import {useSelector} from 'react-redux';

const useSurvivor = () => {
  const [gearSelectedIndex, setGearSelectedIndex] = useState<
    undefined | number
  >(undefined);
  const state = useSelector<RootState, RootState>(res => res);
  const {navigate} = useNavigation();

  const data = {
    gears: SurvivorSelectors.getGears(state),
  };

  const onGearAdd = () => {
    navigate('GearSelectScreen', {index: gearSelectedIndex});
    setGearSelectedIndex(undefined);
  };

  const onGearSelect = (index: number) => setGearSelectedIndex(index);

  const actions = {
    onGearSelect,
    onGearAdd,
  };

  return {data, actions};
};

export default useSurvivor;
