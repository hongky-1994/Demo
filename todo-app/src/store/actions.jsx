export const addTodo = title => ({
  type: "ADD_TODO",
  title: title
});

export const todoCompleted = index => ({
  type: "TODO_COMPLETED",
  index: index
});
