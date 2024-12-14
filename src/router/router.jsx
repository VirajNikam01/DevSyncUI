import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import LogIn from "../Pages/LogIn";
import DownTime from "../Pages/DownTime";
import Quiz from "../Pages/Quiz";
import PlayQuiz from "../Pages/PlayQuiz";
import Feed from "../Pages/Feed";
import RouteProtector from "../components/RouteProtector";
import Profile from "../Pages/Profile";
import RestrictedRoutes from "../components/RestrictedRoutes";
import ProfileEdit from "../Pages/ProfileEdit";
import Connections from "../Pages/Connections";
import Requests from "../Pages/Requests";
import ConnectionProfile from "../Pages/ConnectionProfile";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <RestrictedRoutes>
            <Home />
          </RestrictedRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <RestrictedRoutes>
            <LogIn />
          </RestrictedRoutes>
        ),
      },
      {
        path: "/signin",
        element: (
          <RestrictedRoutes>
            <SignIn />
          </RestrictedRoutes>
        ),
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/quiz/:tech",
        element: <PlayQuiz />,
      },
      {
        path: "/feed",
        element: (
          <RouteProtector roles={["user", "admin"]}>
            <Feed />
          </RouteProtector>
        ),
      },
      {
        path: "/profile",
        element: (
          <RouteProtector roles={["user", "admin"]}>
            <Profile />
          </RouteProtector>
        ),
      },
      {
        path: "/connections",
        element: (
          <RouteProtector roles={["user", "admin"]}>
            <Connections />
          </RouteProtector>
        ),
      },
      {
        path: "profile-edit",
        element: (
          <RouteProtector roles={["user", "admin"]}>
            <ProfileEdit />
          </RouteProtector>
        ),
      },
      {
        path: "/requests",
        element: (
          <RouteProtector roles={["user", "admin"]}>
            <Requests />
          </RouteProtector>
        ),
      },
      {
        path: "/user/:id",
        element: <ConnectionProfile />,
      },
    ],
  },
  {
    path: "/downtime",
    element: <DownTime />,
  },
]);
