import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";
import RegistrationPage from "@/pages/registration/Registration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/registration", element: <RegistrationPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
