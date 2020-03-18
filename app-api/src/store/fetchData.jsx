import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from "./actions";

const fetchData = () => dispatch => {
  dispatch(fetchDataStart());
  return fetch("/data")
    .then(res => res.json())
    .then(data => dispatch(fetchDataSuccess(data)))
    .catch(err => dispatch(fetchDataFailure(err.message)));
};
export default fetchData;
