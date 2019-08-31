const reducer = (state, action) => {
  switch (action.type) {
    case "ALL":
      return (state = "ALL");
    case "COMPLETE":
      return (state = "COMPLETE");
    case "NOT_COMPLETE":
      return (state = "NOT_COMPLETE");

    default:
      return (state = "ALL");
  }
};
export default reducer;
