const initialState = {
  users: [],
  photos: [],
  todos: [{ userId: 2001, id: 2001, title: "An com", completed: true }],
  isloading: false,
  error: null
};

const rootReducer = (state = initialState, payload) => {
  console.log("--------------------------------------");
  console.log("payload", payload);
  console.log("--------------------------------------");
  switch (payload.type) {
    case "GET_DATA_START":
      return {
        ...state,
        isloading: true
      };

    case "GET_DATA_SUCCESS":
      return {
        ...state,
        [payload.key]: payload.data,
        isloading: false
      };

    case "GET_DATA_FAILURE":
      return {
        ...state,
        isloading: false,
        error: payload.error
      };

    // TODOLIST
    case "TODO_CHANGE_STATUS":
      return {
        ...state,
        todos: [...payload.data]
      };

    default:
      return state;
  }
};

export default rootReducer;
