import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "@/AppRouter.tsx";
import "@/index.css";
import { UserProvider } from "@/context/user/user.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <AppRouter />
    </UserProvider>
  </React.StrictMode>
);
