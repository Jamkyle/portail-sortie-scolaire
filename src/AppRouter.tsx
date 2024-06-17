import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";
import RegistrationPage from "@/pages/registration/Registration";
import LoginPage from "@/pages/admin/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/login", element: <LoginPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
