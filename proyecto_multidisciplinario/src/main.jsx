import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import LayoutInicial from "./pages/LayoutInicial";
import Panel from "./pages/Panel";

const router = createBrowserRouter([
  {
    path: "/inicio",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Panel />,
      },
      {
        path: "PanelDeControl",
        element: <Panel />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutInicial />,
    children: [
      {
        index: true,
        element: <Panel />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
