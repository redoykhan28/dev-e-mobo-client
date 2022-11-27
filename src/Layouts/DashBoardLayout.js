import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/AdminHooks';
import useBuyer from '../Hooks/BuyerHooks';
import useSeller from '../Hooks/SellerHook';
import Nav from '../Pages/Shared/Nav/Nav';
import sideimg from '../Assest/login/sidelogin2.png'
import mainImg from '../Assest/sidenav/bannerBg3.png'

const DashBoardLayout = () => {

    //use context
    const { user } = useContext(authContext)

    //use buyer hooks
    const [isBuyer] = useBuyer(user?.email)

    //use seller hooks
    const [isSeller] = useSeller(user?.email)

    //use admin hooks
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content" style={{ backgroundImage: `url(${mainImg})` }}>

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side" style={{ backgroundImage: `url(${sideimg})` }}>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><NavLink className={({ isActive }) => isActive ? 'bg-white text-black rounded-r-lg mt-2' : 'text-white text-decoration-none font-bold'} to={'/dashboard'}>Home</NavLink></li>

                        <div>
                            {
                                isBuyer &&
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-white text-black rounded-r-lg mt-2' : 'text-white text-decoration-none font-bold'} to={'/myorder'}>My Orders</NavLink></li>
                            }
                        </div>

                        {
                            isSeller &&
                            <li><NavLink className={({ isActive }) => isActive ? 'bg-white text-black rounded-r-lg mt-2' : 'text-white text-decoration-none font-bold'} to={'/addProducts'}>Add Products</NavLink></li>
                        }

                        {
                            isSeller &&
                            <li><NavLink className={({ isActive }) => isActive ? 'bg-white text-black rounded-r-lg mt-2' : 'text-white text-decoration-none font-bold'} to={'/myProduct'}>My Products</NavLink></li>
                        }

                        <div>
                            {
                                isAdmin &&
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-white text-black rounded-r-lg mt-2' : 'text-white text-decoration-none font-bold'} to={'/allbuyer'}>All Buyer</NavLink></li>
                            }
                        </div>

                        <div>
                            {
                                isAdmin &&
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-white text-black rounded-r-lg mt-2' : 'text-white text-decoration-none font-bold'} to={'/allseller'} >All Seller</NavLink></li>
                            }
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;