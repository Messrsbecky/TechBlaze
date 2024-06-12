import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
//
// layout
// import RootLayOut from "./layout/RootLayout";
//
// pagesL
// import NotFound from "./pages/error/NotFound";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Services from "./pages/services/Services";
// styles

import "../src/styles/index.css";
// import Hero from "./pages/home/partials/Hero";
// import Navbar from "./components/Navbar";
// import LoginBento from "./pages/registration/partials/LoginBento";
// import LoginPage from "./pages/registration/LoginPage";
// import SignUpPage from "./pages/registration/SignUpPage";
// 
//authentication
import SignUpPage from "./pages/registration/SignUpPage"

// const router = createBrowserRouter([
// {
// path: "/",
// element: <RootLayOut />,
// errorElement: <NotFound />,
// children: [
// {
// index: true,
// element: <LandingPage />,
// },
// {
// path: "/dashboard",
// element: <Dashboard />,
// },
// {
// path: "/services",
// element: <Services />,
// },
// ],
// },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <Login /> */}
    {/* <SignUpPage/> */}
    {/* <Hero /> */}
    {/* <Navbar /> */}
    {/* <LoginBento /> */}
    {/* <LoginPage/> */}
    <SignUpPage/>
  </React.StrictMode>
);
