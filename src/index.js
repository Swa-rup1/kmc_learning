import React from "react";
import ReactDOM from "react-dom/client";

// import App from './App';

import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./router/mainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={MainRoute}></RouterProvider>
  </React.StrictMode>
);
