import { getDataStart, getDataSuccess, getDataFailure } from "./actions";
export const fetchData = (key, url) => {
  return dispatch => {
    dispatch(getDataStart());
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(function() {
          if (data.error) {
            throw data.error;
          }

          dispatch(getDataSuccess(key, data));
          return data.users;
        }, 1500);
      })
      .catch(error => {
        dispatch(getDataFailure(error));
      });
  };
};
