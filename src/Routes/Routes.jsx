import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Components/Layout";
import Receives from "../Pages/Receives";
import Auth from "../Pages/Auth";
export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/receives",
          element: <Receives />,
        },
      ],
    },
    {
      path: "/auth/login",
      element: <Auth />,
    },
    {
      path: "/auth/signup",
      element: <Auth />,
    },
  ]);
}
