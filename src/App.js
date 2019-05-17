import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { TopNavbar } from "./components/topNavbar";
import Provider from "./components/context";
import TodoListContainer from "./components/todoListContainer";

function App() {
  return (
    <Provider>
      <div className="container mx-auto col-6">
        <TopNavbar />
        <TodoListContainer />
      </div>
    </Provider>
  );
}

export default App;
