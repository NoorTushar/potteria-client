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
import SingleItemPage from "../Pages/SingleItemPage/SingleItemPage";
import MyItems from "../Pages/MyItems/MyItems";
import UpdateItemPage from "../Pages/UpdateItemPage/UpdateItemPage";
import SubCategoryPage from "../Pages/SubCategoryPage/SubCategoryPage";

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
            path: "/itemDetails/:id",
            element: (
               <PrivateRoute>
                  <SingleItemPage></SingleItemPage>
               </PrivateRoute>
            ),
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
            path: "/myItems/:email",
            element: (
               <PrivateRoute>
                  <MyItems></MyItems>
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
         {
            path: "/updateItem/:id",
            loader: ({ params }) => {
               return fetch(`http://localhost:3000/items/${params.id}`);
            },
            element: (
               <PrivateRoute>
                  <UpdateItemPage></UpdateItemPage>
               </PrivateRoute>
            ),
         },
         {
            path: "/subCategory/:sub_name",
            element: <SubCategoryPage></SubCategoryPage>,
            loader: ({ params }) => {
               return fetch(
                  `http://localhost:3000/subcategories/${params.sub_name}`
               );
            },
         },
      ],
   },
]);
