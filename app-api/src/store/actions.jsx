export const fetchDataStart = () => ({
  type: "FETCH_DATA_START"
});

export const fetchDataSuccess = data => ({
  type: "FETCH_DATA_SUCCESS",
  data
});

export const fetchDataFailure = error => ({
  type: "FETCH_DATA_FAILURE",
  error
});
