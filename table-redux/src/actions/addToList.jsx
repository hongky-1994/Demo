export const addNew = newUser => {
  return {
    type: "ADD_NEW",
    data: newUser
  };
};
export const rowSelected = index => {
  return {
    type: "ROW_SELECTED",
    index: index
  };
};

export const remove = () => {
  return {
    type: "REMOVE"
  };
};
export const isEditing = index => {
  return {
    type: "IS_EDITING",
    index: index
  };
};
export const edited = (data, index) => {
  return {
    type: "EDITED",
    data: data,
    index: index
  };
};
