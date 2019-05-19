import React from "react";
import "./App.css";
import Provider from "./components/context";
import TodoListContainer from "./components/todoListContainer";

function App() {
  return (
    <Provider>
      <div className="container mx-auto p-3 col-6 main-app">
        <TodoListContainer />
      </div>
    </Provider>
  );
}

export default App;
