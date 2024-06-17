import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";
import RegistrationPage from "@/pages/registration/Registration";
import LoginPage from "@/pages/admin/LoginPage";
import ProtectedRoute from "@/components/routes/ProtectedRoute";
import DashBoard from "@/pages/admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: <DashBoard />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
