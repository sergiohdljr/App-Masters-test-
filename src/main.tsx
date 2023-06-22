import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home/>
  </React.StrictMode>
);
