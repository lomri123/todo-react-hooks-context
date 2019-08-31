import React from "react";
import "./App.css";
import Provider from "./context/ContextStore";
import AppContainer from "./components/AppContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <Provider>
      <ToastContainer />
      <AppContainer />
    </Provider>
  );
}

export default App;
