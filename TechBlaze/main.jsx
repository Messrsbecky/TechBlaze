import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, createBrowserRouter, RouterProvider  } from "react-router-dom";

// layout
import RootLayOut from "./layout/RootLayout";

// pages
import Landing from "./pages/destination/Landing";
import NotFound from "./pages/error/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";

// styles
import "../src/styles/index.css";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideNav from "./pages/dashboard/partials/SideNav";

//authentication
import SignUpPage from "./pages/registration/SignUpPage";
import LoginPage from "./pages/registration/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
