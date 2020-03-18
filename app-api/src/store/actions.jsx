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

export const addNewUser = data => ({
  type: "ADD_NEW_USER",
  data
});

export const removeUser = index => ({
  type: "REMOVE_USER",
  index
});
export const isEditing = () => ({
  type: "IS_EDITING"
});
