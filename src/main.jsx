import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import Navbar from "./components/Nav";
// import LoginBento from "./pages/registration/partials/LoginBento";
//import LoginPage from "./pages/registeration/LoginPage";
//import SignUpPage from "./pages/registeration/SignUpPage";
//
//import LandingPage from "./pages/destination/Landing";
//import Dashboard from "./pages/dashboard/Dashboard";
//import Footer from "./components/Footer";
//import SideNav from "./pages/dashboard/partials/SideNav";
import ChatWindow from "./pages/dashboard/DashboardPages/ChatWindow";
//authentication

//import WriteUserData from "./pages/registration/functions/WriteUserData"; //addition
//import ReadUserData from "./pages/registration/functions/ReadUserData"; //addition
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
    {/* addition */}
    <ToastContainer />

    {/* <RouterProvider router={router} /> */}
    {/* <Login /> */}
    {/* <SignUpPage/> */}
    {/* <Hero /> */}
    <Navbar />
    {/* <Dashboard/> */}
    {/* <SideNav/> */}
    {/* <LoginBento /> */}
    {/* <LoginPage />
    <SignUpPage />
    <LandingPage/> */}
    {/* <WriteUserData/> */}
    {/* <ReadUserData/>  */}
    <ChatWindow/>
    {/* <Footer /> */}
  </React.StrictMode>
);
