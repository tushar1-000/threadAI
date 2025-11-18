import { createBrowserRouter } from "react-router";

import { Hello } from "./components/Hello";


export const router = createBrowserRouter([
  { path: "/", Component: Hello },
]);
