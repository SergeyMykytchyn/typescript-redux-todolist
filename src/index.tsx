import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "reducers";
import thunkMiddleware from 'redux-thunk';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer, applyMiddleware(thunkMiddleware))}>
      <App />
    </Provider>
  </React.StrictMode>
);
