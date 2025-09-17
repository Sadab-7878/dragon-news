import React from "react";
import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },

  {
    path: "news",
    element: <h1>News</h1>,
  },

  {
    path: "auth",
    element: <AuthLayout />,

    children: [
      {
        path: "/auth/login",
        element: <h2>Login</h2>,
      },
      {
        path: "/auth/register",
        element: <h2>Register</h2>,
      },
    ],
  },

  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export default router;
