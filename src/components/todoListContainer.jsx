import React, { useContext, useEffect } from "react";
import { Context } from "./context";
import TodoList from "./todoList";
import TodoNavbar from "./todoNavbar";
import { filteredTodoList } from "../utils";
import axios from "axios";
import { toast } from "react-toastify";

function TodoListContainer(props) {
  const { todos, dispatchTasks, completion, dispatchToggle } = useContext(
    Context
  );

  let results = filteredTodoList(todos, completion);

  const setInitial = initialState => {
    dispatchTasks({
      type: "INITIAL",
      todos: initialState
    });
  };

  const changeStatus = async e => {
    let tmpTodos = [...todos];
    dispatchTasks({
      type: "TOGGLE",
      id: e._id
    });
    try {
      await axios.put("http://localhost:3000/", {
        id: e._id,
        updateData: { status: !e.status }
      });
    } catch (ex) {
      toast.error("An expected error occured while trying to toggle");
      setInitial(tmpTodos);
    }
  };

  const handleSelectedItemClick = e => {
    dispatchToggle({
      type: e
    });
  };

  const handleDelete = async e => {
    let tmpTodos = [...todos];
    dispatchTasks({
      type: "DELETE",
      id: e
    });
    try {
      await axios.delete(`http://localhost:3000/${e}`);
    } catch (ex) {
      toast.error("An expected error occured while trying to toggle");
      setInitial(tmpTodos);
    }
  };

  const handleFormSubmit = async (id, addTask, editTask) => {
    if (id === "") {
      console.log("add");
      try {
        let { data: result } = await axios.post("http://localhost:3000/", {
          todoData: addTask
        });
        dispatchTasks({
          type: "ADD",
          task: result.task,
          id: result._id
        });
      } catch (ex) {
        toast.error("An expected error occured while trying to add item");
      }
    } else {
      try {
        await axios.put("http://localhost:3000/", {
          id: id,
          updateData: { task: editTask }
        });
        dispatchTasks({
          type: "EDIT",
          id: id,
          task: editTask
        });
      } catch (ex) {
        toast.error("An expected error occured while trying to update item");
      }
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/");
        dispatchTasks({
          type: "INITIAL",
          todos: result.data.result
        });
      } catch (ex) {
        toast.error("An expected error occured");
      }
    };
    fetchInitialData();
  }, [dispatchTasks]);

  return (
    <>
      <TodoNavbar
        selectedItem={completion}
        handleSelectedItemClick={handleSelectedItemClick}
      />
      <TodoList
        todoListProps={results}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
        formSubmitProps={handleFormSubmit}
      />
    </>
  );
}

export default TodoListContainer;
