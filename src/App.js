import React from "react";
import ReactDOM from "react-dom/client";
import { useLayoutEffect } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About"
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import "react-toastify/dist/ReactToastify.css";
import appStore from "./store/appStore";

const AppLayout = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="app">
        <Toaster />
        <Header />
        <Outlet />
        <Footer className="absolute bottom-0" />
      </div>
    </Provider>
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
        path: "/about",
        element: <About />,
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
