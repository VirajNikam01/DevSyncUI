import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import LogIn from "../Pages/LogIn";
import DownTime from "../Pages/DownTime";
import Quiz from "../Pages/Quiz";
import PlayQuiz from "../Pages/PlayQuiz";

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
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/quiz/:tech",
        element: <PlayQuiz />,
      },
    ],
  },
  {
    path: "/downtime",
    element: <DownTime />,
  },
]);
