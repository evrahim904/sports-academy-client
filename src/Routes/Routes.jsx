import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Classes from "../Pages/Classes/Classes";
import Private from "./Private";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'classes',
          element:  <Classes></Classes>
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Private><Dashboard></Dashboard></Private>,
      children:[
        {
          path:'selectedClass',
          element:<SelectedClass></SelectedClass>
        },
        {
          path: 'allUsers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'addItem',
          element: <AddItem></AddItem>
        }
      ]
    }
  ]);