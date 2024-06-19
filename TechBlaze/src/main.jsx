import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";
import DashboardLayout from "./layout/DashboardLayout";

// pages
import Landing from "./pages/home/Landing";
import NotFound from "./pages/error/NotFound";
import Dashboard from "./pages/dashboard/Dashboard"; // Example dashboard page
import HotSpots from "./pages/dashboard/partials/HotSpots"; // Example hotspots page

// styles
import "./styles/index.css";

// authentication
import SignUpPage from "./pages/registeration/SignUpPage";
import LoginPage from "./pages/registeration/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />, // Default dashboard page
          },
          {
            path: "overview",
            element: <Dashboard />, // Example page for overview
          },
          {
            path: "hotspots",
            element: <HotSpots />, // Example page for hotspots
          },
          // Add more nested routes as needed
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
