export const getDataStart = () => ({
  type: "GET_DATA_START"
});

export const getDataSuccess = data => ({
  type: "GET_DATA_SUCCESS",
  payload: data
});

export const getDataFailure = error => ({
  type: "GET_DATA_FAILURE",
  payload: error
});
