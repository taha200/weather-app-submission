// ViewModel.js
import useHomeScreenModel from './../model/HomeScreenModel';

const useHomeScreenViewModel = () => {
    const {
    dataObj,
    location,
    cities,
    changeLocation} = useHomeScreenModel();

  const onChange = (val) => {
    changeLocation(val)
  };

  return {
    dataObj,
    location,
    cities,
    onChange
  };
};

export default useHomeScreenViewModel;
