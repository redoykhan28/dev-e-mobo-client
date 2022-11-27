import DashBoardLayout from "../Layouts/DashBoardLayout";
import Categories from "../Pages/Categories/Categories";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyer from "../Pages/Dashboard/AllBuyer/AllBuyer";
import Allseller from "../Pages/Dashboard/AllSeller/Allseller";
import DashHome from "../Pages/Dashboard/DashHome";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import SignUp from "../Pages/Signup/SignUp";
import PrivetRoute from '../Route/PrivetRoute'
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import SellerRoute from "./SellerRoute";

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
                element: <PrivetRoute><Products></Products></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)
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
        element: <PrivetRoute><DashBoardLayout></DashBoardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashHome></DashHome>

            },

            {
                path: '/myorder',
                element: <BuyerRoute><MyBooking></MyBooking></BuyerRoute>
            },

            {
                path: '/addProducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },

            {
                path: '/myProduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },

            {
                path: '/allseller',
                element: <AdminRoute><Allseller></Allseller></AdminRoute>
            },
        ]
    }
])

export default router