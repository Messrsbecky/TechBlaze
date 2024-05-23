import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layout
import RootLayOut from "./layout/RootLayout";

//pages
import NotFound from "./pages/error/NotFound";
import Dashboard from "./pages/dashboard"
import Services from "./pages/services"
//styles
import "../src/styles/index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path:"/services",
        element: <Services />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
