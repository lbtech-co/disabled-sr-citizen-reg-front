import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MUIThemeProvider from "./utils/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./utils/Context.tsx";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppContextProvider>
        <MUIThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MUIThemeProvider>
      </AppContextProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
