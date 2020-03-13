const initialState = {
  data: {},
  completed: false,
  error: null
};

const page1Reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case "GET_DATA_START":
      return { ...state };
    case "GET_DATA_SUCCESS":
      return { ...state, completed: true, data: payload.payload };
    case "GET_DATA_FAILURE":
      return { ...state, completed: true, error: payload.payload };

    default:
      return state;
  }
};

export default page1Reducer;
