import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';

const DashBoardLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-success">

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><NavLink className={({ isActive }) => isActive ? 'bg-primary text-white rounded-md mt-2' : 'text-black text-decoration-none font-bold'} to={'/dashboard'}>My Order</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? 'bg-primary text-white rounded-md mt-2' : 'text-black text-decoration-none font-bold'} to={'/addProducts'}>Add Products</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? 'bg-primary text-white rounded-md mt-2' : 'text-black text-decoration-none font-bold'} to={'/manageDoc'}>Manage Doctors</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;