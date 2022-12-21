import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assest/logo.PNG'
import { authContext } from '../../../Context/AuthProvider';
import './Nav.css'

const Nav = () => {

    //use query for load category in nav
    const { data: categories = [] } = useQuery({

        queryKey: ['categories'],
        queryFn: () => fetch('https://e-mobo-server.vercel.app/categories/cat-name')
            .then(res => res.json())
    })

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
                                <FaAngleDown />
                            </Link>
                            <ul className="p-2 bg-accent text-white">
                                {
                                    categories?.map(category => <li><Link to={`/product/${category.name}`} key={category._id}>{category.name}</Link></li>
                                    )
                                }
                            </ul>
                        </li>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                        {
                            user &&
                            <li><Link to={'/dashboard'}>Dashboard</Link></li>
                        }
                    </ul>
                </div>
                <div className='flex'>
                    <Link to={'/home'}><img className='w-40' src={logo} alt="logo" /></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul data-aos="zoom-out" className="menu menu-horizontal p-0">
                    <li><NavLink to={'/home'} className={({ isActive }) => isActive ? 'clr bg-transparent fw-semibold' : ' fw-semibold'}>Home</NavLink></li>
                    <li tabIndex={0}>
                        <NavLink className='justify-between bg-transparent'>
                            Categories
                            <FaAngleDown />
                        </NavLink>
                        <ul className="p-2 bg-accent shadow-2xl z-30 text-white">
                            {
                                categories?.map(category => <li><Link to={`/product/${category.name}`} key={category._id}>{category.name}</Link></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'clr fw-semibold bg-transparent' : ' fw-semibold'}>Blogs</NavLink></li>
                    {
                        user &&
                        <li><NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'clr fw-semibold bg-transparent' : ' fw-semibold'}>Dashboard</NavLink></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link onClick={handleLogout} className="btn md:w-32 text-white rounded-3xl btn-accent hover:btn-secondary">Logout</Link>
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