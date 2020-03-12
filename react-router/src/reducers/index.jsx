const userInfo = { isLoaded: false, error: null, item: [] };

const userReducer = (state = { userInfo }, payload) => {
  console.log("run reducer");

  switch (payload.type) {
    case "LOAD_DATA":
      console.log("load data", payload);

      return {
        ...state,
        userInfo: payload.payload
      };
    default:
      console.log("default", state);

      return state;
  }
};

export default userReducer;
