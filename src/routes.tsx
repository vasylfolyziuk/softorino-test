import {
  createBrowserRouter,
} from "react-router-dom";

import App from "./App";
import ErrorPage from './features/ErrorPage/ErrorPage';
import Tasks from './features/Tasks/Tasks';
import Auth from "./features/Auth/Auth";
import Login from "./features/Auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projects/:projectId",
    element: <Tasks />,
  },
]);