import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { db } from "./Firebase/config";
import { FirebaseContext } from "./store/Context";
import Context from "./store/Context";
import  PostContext  from "./store/PostContext";

ReactDOM.render(
  <FirebaseContext.Provider value={db}>
    <Context>
      <PostContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostContext>
    </Context>
  </FirebaseContext.Provider>
  ,
  document.getElementById("root")
);
