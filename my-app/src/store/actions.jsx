export const getDataStart = () => ({
  type: "GET_DATA_START"
});

export const getDataSuccess = (key, data) => ({
  type: "GET_DATA_SUCCESS",
  key: key,
  data: data
});

export const getDataFailure = error => ({
  type: "GET_DATA_FAILURE",
  error: error.message
});

// TODO LIST ACTION

export const todoChangeStatus = data => {
  console.log("TODO_CHANGE_STATUS");
  return { type: "TODO_CHANGE_STATUS", data };
};
