import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Items from "../Pages/Items/Items";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddItem from "../Pages/AddItem/AddItem";
import UpdateProfilePage from "../Pages/UpdateProfilePage/UpdateProfilePage";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/items",
            element: <Items></Items>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/addItem",
            element: (
               <PrivateRoute>
                  <AddItem></AddItem>
               </PrivateRoute>
            ),
         },
         {
            path: "/updateProfile",
            element: (
               <PrivateRoute>
                  <UpdateProfilePage></UpdateProfilePage>
               </PrivateRoute>
            ),
         },
      ],
   },
]);
