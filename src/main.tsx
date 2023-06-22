import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages";
import { QueryClientProvider } from "react-query";
import { queryCLient } from "./service/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
      <GlobalStyle />
      <Home />
    </QueryClientProvider>
  </React.StrictMode>
);
