import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';
import useSeller from '../Hooks/SellerHook';
import Loader from '../Pages/Loader/Loader';

const SellerRoute = ({ children }) => {
    //location
    const location = useLocation()

    //use context
    const { user, loader } = useContext(authContext)

    //use seller hooks
    const [isSeller, dashLoader] = useSeller(user?.email)


    if (loader || dashLoader) {

        return <Loader></Loader>
    }

    if (user && isSeller) {

        return children
    }

    return <Navigate to={'/login'} state={{ from: location }} replaced></Navigate>

};

export default SellerRoute;