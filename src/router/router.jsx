import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import LogIn from "../Pages/LogIn";
import DownTime from "../Pages/DownTime";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
  {
    path: "/downtime",
    element: <DownTime />,
  },
]);
