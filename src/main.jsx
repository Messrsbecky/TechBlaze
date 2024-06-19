import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";
import DashboardLayout from "./layout/DashboardLayout";

// pages
import Landing from "./pages/home/Landing";
import NotFound from "./pages/error/NotFound";
import HotSpots from "./pages/dashboard/partials/HotSpots";
import ChatWindow from "./pages/dashboard/DashboardPages/ChatWindow"; // Example hotspots page

// styles
import "./styles/index.css";

// authentication
import SignUpPage from "./pages/registration/SignUpPage";
import LoginPage from "./pages/registration/LoginPage";

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
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HotSpots />, // Default dashboard page
      },
      {
        path: "overview",
        element: <HotSpots />, // Example page for overview
      },
      {
        path: "chatwindow",
        element: <ChatWindow />, // Example page for hotspots
      },
      // Add more nested routes as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
