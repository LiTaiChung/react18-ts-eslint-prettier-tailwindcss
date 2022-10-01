import { RouterProvider } from "react-router-dom";
import routes from "./routes";
// import ScrollToTop from "helpers/ScrollToTop";

// const GetRoutes = () => {
//   return useRoutes(routes);
// };

const SetRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default SetRoutes;
