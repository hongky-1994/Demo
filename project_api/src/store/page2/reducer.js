const initialState = {
  name: "Pham Hong Hanh",
  age: 20
};

const page2Reducer = (state = { initialState }, payload) => {
  switch (payload.type) {
    default:
      return state;
  }
};

export default page2Reducer;
