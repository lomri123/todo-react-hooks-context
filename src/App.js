import React, { useEffect } from "react";
import "./App.css";
import Provider from "./components/context";
import TodoListContainer from "./components/todoListContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Socket.io
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

function App() {
  function sendSocketIO() {
    socket.on("lobby", function(msg) {
      console.log("message: " + msg.id, msg.task);
    });
  }

  function socketChanges() {
    socket.on("data-changed", function(type, data) {
      console.log(type, data);
    });
  }

  useEffect(() => {
    sendSocketIO();
    socketChanges();
  }, []);

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
