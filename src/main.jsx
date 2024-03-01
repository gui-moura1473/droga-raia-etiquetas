import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AppRoutes />
    </QueryClientProvider>
  </React.StrictMode>
);
