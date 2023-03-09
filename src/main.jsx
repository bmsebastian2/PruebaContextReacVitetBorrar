import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "../router/index";
import { RouterProvider } from "react-router-dom";
import EjemploContextProvider from "../context/EjemploContextProvider";

import Home from "../pages/Home";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EjemploContextProvider>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </EjemploContextProvider>
  </React.StrictMode>
);
