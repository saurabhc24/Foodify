import React from "react";
import ReactDOM from "react-dom/client";
import { useLayoutEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Help from "./components/Help";
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import "react-toastify/dist/ReactToastify.css";

const AppLayout = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer className="absolute bottom-0"/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
