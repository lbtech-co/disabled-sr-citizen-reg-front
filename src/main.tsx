import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MUIThemeProvider from "./utils/ThemeProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.tsx";
import UsersCrud from "./pages/UsersCrud.tsx";
import UserDetailForm from "./components/UserDetailForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "users",
    element: <UsersCrud />,
  },
  {
    path: "users/create",
    element: <UserDetailForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MUIThemeProvider>
      <RouterProvider router={router} />
    </MUIThemeProvider>
  </React.StrictMode>,
);
