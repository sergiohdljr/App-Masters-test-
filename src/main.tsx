import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages";
import { QueryClientProvider } from "react-query";
import { queryCLient } from "./service/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
      <Home />
    </QueryClientProvider>
  </React.StrictMode>
);
