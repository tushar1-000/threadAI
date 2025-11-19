import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SignIn from "@/pages/SignIn";
import Signup from "@/pages/SignUp";
import AuthLayout from "@/layout/AuthLayout";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
        path: "auth",
        Component: AuthLayout,
        children: [
          { path: "signin", Component: SignIn },
          { path: "signup", Component: Signup },
        ],
      },
  { path: "*", element: <NotFound /> }
]);

export default router;
