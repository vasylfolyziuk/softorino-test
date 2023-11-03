import {
  createBrowserRouter,
} from "react-router-dom";

import App from "./App";
import ErrorPage from './features/ErrorPage/ErrorPage';
import Tasks from './features/Tasks/Tasks';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projects/:projectId",
    element: <Tasks />,
  },
]);