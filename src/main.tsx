import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MUIThemeProvider from "./utils/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./utils/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <MUIThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MUIThemeProvider>
    </AppContextProvider>
  </React.StrictMode>,
);
