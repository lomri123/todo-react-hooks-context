export const filteredTodoList = (todos, completionStatus) => {
  if (completionStatus === "ALL") {
    return todos;
  } else if (completionStatus === "COMPLETE") {
    return todos.filter(todo => todo.status === true);
  } else {
    return todos.filter(todo => todo.status === false);
  }
};
