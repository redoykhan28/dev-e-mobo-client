import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';
import useBuyer from '../Hooks/BuyerHooks';
import Loader from '../Pages/Loader/Loader';

const BuyerRoute = ({ children }) => {
    //location
    const location = useLocation()

    //use context
    const { user, loader } = useContext(authContext)

    //use seller hooks
    const [isBuyer, dashLoader] = useBuyer(user?.email)


    if (loader || dashLoader) {

        return <Loader></Loader>
    }

    if (user && isBuyer) {

        return children
    }

    return <Navigate to={'/login'} state={{ from: location }} replaced></Navigate>


};

export default BuyerRoute;