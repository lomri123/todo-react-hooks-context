const reducer = (state, action) => {
  switch (action.type) {
    case "EDIT":
      return (state = action.id);
    default:
      return (state = "");
  }
};
export default reducer;
