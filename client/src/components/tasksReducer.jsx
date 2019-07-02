const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [{ _id: action.id, task: action.task, status: false }, ...state];
    case "DELETE":
      return state.filter(todo => todo._id !== action.id);
    case "TOGGLE":
      return state.map(todo =>
        todo._id === action.id ? { ...todo, status: !todo.status } : todo
      );
    case "EDIT":
      return state.map(todo =>
        todo._id === action.id ? { ...todo, task: action.task } : todo
      );
    case "INITIAL":
      return action.todos;
    default:
      return state;
  }
};
export default reducer;
