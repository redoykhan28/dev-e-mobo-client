import DashBoardLayout from "../Layouts/DashBoardLayout";
import Categories from "../Pages/Categories/Categories";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import DashBoard from "../Pages/Dashboard/DashBoard/DashBoard";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import SignUp from "../Pages/Signup/SignUp";
import PrivetRoute from '../Route/PrivetRoute'

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Blogs } = require("../Pages/Blogs/Blogs");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },

            {
                path: '/categories',
                element: <Categories></Categories>
            },

            {
                path: '/product/:name',
                element: <PrivetRoute><Products></Products></PrivetRoute>
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    },
    {
        path: '/',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },

            {
                path: '/addProducts',
                element: <AddProducts></AddProducts>
            }
        ]
    }
])

export default router