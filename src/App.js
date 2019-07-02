import React from "react";
import "./App.css";
import Provider from "./components/context";
import TodoListContainer from "./components/todoListContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <Provider>
      <ToastContainer />
      <div className="container mx-auto p-3 col-6 main-app">
        <TodoListContainer />
      </div>
    </Provider>
  );
}

export default App;
