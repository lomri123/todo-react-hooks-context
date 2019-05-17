const reducer = (state, action) => {
  switch (action.type) {
    case "all":
      return (state = "all");
    case "completed":
      return (state = "completed");
    case "not-completed":
      return (state = "not-completed");

    default:
      return (state = "all");
  }
};
export default reducer;
