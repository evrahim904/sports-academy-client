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
import MyClasses from "../Pages/Dashboard/MyClassess/MyClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import AllClassFromInstructor from "../Pages/Dashboard/AllClassFromInstructor/AllClassFromInstructor";
import Feedback from "../Pages/Dashboard/AllClassFromInstructor/Feedback";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import InstructorRoute from "./InstructorRoute";





  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
          element:<Classes></Classes>
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
          path:'allClassInstructor',
          element:<AdminRoute><AllClassFromInstructor></AllClassFromInstructor></AdminRoute>
        },
        {
          path:'feedback',
          element:<Feedback></Feedback>
        },
        {
          path: 'allUsers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'addItem',
          element: <AddItem></AddItem>
        },
        {
          path: 'myClasses',
          element:<MyClasses></MyClasses>
        },
        {
          path: 'payment/:id',
          element:<Payment></Payment>
        },
        {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'enrolledClass',
          element: <EnrolledClass></EnrolledClass>
        }
      ]
    }
  ]);