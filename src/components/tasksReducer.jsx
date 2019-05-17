import uuid from "uuid/v4";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: uuid(), task: action.title, date: action.date, status: false }
      ];
    case "DELETE":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, status: !todo.status } : todo
      );
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, task: action.task, date: action.date }
          : todo
      );
    default:
      return state;
  }
};
export default reducer;
