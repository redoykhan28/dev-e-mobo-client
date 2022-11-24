import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assest/logo.PNG'
import { authContext } from '../../../Context/AuthProvider';

const Nav = () => {

    //use context
    const { user, logout } = useContext(authContext)

    //handle logout
    const handleLogout = () => {

        //using logout
        logout()
            .then(res => {

            })
    }

    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Categories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li><Link>Blogs</Link></li>
                        {
                            user &&
                            <li><Link to={'/dashboard'}>Dashboard</Link></li>
                        }
                    </ul>
                </div>
                <div className='flex'>
                    <img className='w-40' src={logo} alt="logo" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li tabIndex={0}>
                        <Link className="justify-between">
                            Categories
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-base-100">
                            <li><Link>Submenu 1</Link></li>
                            <li><Link>Submenu 2</Link></li>
                        </ul>
                    </li>
                    <li><Link>Blogs</Link></li>
                    {
                        user &&
                        <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link onClick={handleLogout} className="btn md:w-32 text-white rounded-3xl btn-accent hover:btn-primary">Logout</Link>
                        :
                        <Link to={'/login'} className="btn md:w-32 text-white rounded-3xl btn-primary hover:btn-accent">Login</Link>
                }
            </div>
            <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Nav;