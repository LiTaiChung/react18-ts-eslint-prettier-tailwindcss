import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "layouts/Public";
import Page404 from "pages/page404";
import Home from "pages/home";
import Login from "pages/login";

const routes = createBrowserRouter([
  {
    path: "/*",
    element: <Page404 />,
  },
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
