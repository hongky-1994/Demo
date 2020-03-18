const initialState = {
  users: [
    { name: "Pham Hong Ky", age: 18, job: "Coder", gender: "Male" },
    { name: "Pham Hong Hanh", age: 12, job: "Colleger", gender: "Female" }
  ],
  isloading: false,
  error: null,
  isEditing: false
};

const rootReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case "FETCH_DATA_START":
      return { ...state, isloading: true };
    case "FETCH_DATA_SUCCESS":
      return { ...state, users: [...payload.data], isloading: false };
    case "FETCH_DATA_FAILURE":
      return state;
    case "ADD_NEW_USER":
      return { ...state, users: [...state.users, payload.data] };
    case "REMOVE_USER":
      return {
        ...state,
        users: [
          ...state.users.slice(0, payload.index),
          ...state.users.slice(payload.index + 1)
        ]
      };
    case "IS_EDITING":
      return { ...state, isEditing: !state.isEditing };
    default:
      return { ...state, error: payload.error };
  }
};

export default rootReducer;
