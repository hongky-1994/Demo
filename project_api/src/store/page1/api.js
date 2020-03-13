import { getDataStart, getDataSuccess, getDataFailure } from "./actions";

const getData = city => {
  return dispatch => {
    dispatch(getDataStart());
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c3ada5155688ae84929d0916eff462c`
    )
      .then(res => res.json())
      .then(data => {
        dispatch(getDataSuccess(data));
      })

      .catch(err => {
        dispatch(getDataFailure(err.message));
      });
  };
};
export default getData;
