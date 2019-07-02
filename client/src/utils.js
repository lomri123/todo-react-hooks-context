export const filteredTodoList = (todos, completionStatus) => {
  if (completionStatus === "all") {
    return todos;
  } else if (completionStatus === "completed") {
    return todos.filter(todo => todo.status === true);
  } else {
    return todos.filter(todo => todo.status === false);
  }
};
