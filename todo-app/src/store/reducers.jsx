const initialState = {
  todos: [
    { id: 1, title: "Do homework", completed: false },
    { id: 2, title: "Wash clothes", completed: false },
    { id: 3, title: "Clean the house", completed: false }
  ]
};

const rootReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case "ADD_TODO":
      const newId = Math.max(...state.todos.map(todo => todo.id)) + 1;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: newId,
            title: payload.title,
            completed: false
          }
        ]
      };
    case "TODO_COMPLETED":
      console.log("completed");
      return state;
    default:
      return state;
  }
};
export default rootReducer;
