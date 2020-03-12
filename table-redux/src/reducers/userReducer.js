const userInfo = [
  {
    name: "Pham Hong Ky",
    age: 18,
    score: 5,
    checked: false,
    editing: false
  },
  {
    name: "Pham Hong Hanh",
    age: 16,
    score: 9.9,
    checked: false,
    editing: false
  },
  {
    name: "Truong Thuy Hanh",
    age: 16,
    score: 9,
    checked: false,
    editing: false
  },
  {
    name: "Cong Thu Hanh",
    age: 16,
    score: 8.9,
    checked: false,
    editing: false
  }
];

const userReducer = (state = { userInfo }, payload) => {
  switch (payload.type) {
    case "ADD_NEW":
      return {
        ...state,
        userInfo: [...state.userInfo, payload.data]
      };
    case "REMOVE":
      let newData = [];
      for (let i = 0; i < state.userInfo.length; i++) {
        const e = state.userInfo[i];
        if (!e.checked) {
          newData.push(e);
        }
      }
      return {
        ...state,
        userInfo: [...newData]
      };
    case "ROW_SELECTED":
      let x = state.userInfo;
      for (const index of payload.index) {
        x[index].checked = !x[index].checked;
      }
      return {
        ...state,
        userInfo: [...x]
      };
    case "IS_EDITING":
      let y = state.userInfo;
      y[payload.index].editing = !y[payload.index].editing;
      return {
        ...state,
        userInfo: [...y]
      };
    case "EDITED":
      let users = state.userInfo;
      users[payload.index] = payload.data;
      return {
        ...state,
        userInfo: [...users]
      };
    default:
      return state;
  }
};

export default userReducer;
