import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import TodosPage from "./app/TodosPage";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <TodosPage />
    </Provider>
  );
}

export default App;
