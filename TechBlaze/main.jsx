import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// layout
import RootLayOut from "./layout/RootLayout";
import DashboardLayout from "./layout/DashboardLayout";

// pages
import Landing from "./pages/home/Landing";
import NotFound from "./pages/error/NotFound";
import HotSpots from "./pages/dashboard/partials/HotSpots";

// styles
import "../src/styles/index.css";

// authentication
import SignUpPage from "./pages/registration/SignUpPage";
import LoginPage from "./pages/registration/LoginPage";

// components
// import ProtectedRoute from "./components/ProtectedRoute";

// Fake authentication function (replace with your actual authentication logic)
const isAuthenticated = () => {
  return true; // Replace with actual authentication check
};

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
        element: (
          <ProtectedRoute
            isAuthenticated={isAuthenticated()}
            element={<DashboardLayout />}
          />
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "hotspots",
            element: <HotSpots />,
          },
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
