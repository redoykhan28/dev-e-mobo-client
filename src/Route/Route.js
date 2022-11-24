import Categories from "../Pages/Categories/Categories";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";

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
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    }
])

export default router