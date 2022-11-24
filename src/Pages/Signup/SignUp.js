import React from 'react';
import { Link } from 'react-router-dom';
import loginbg from '../../Assest/login/loginbg.PNG'
import sidepic from '../../Assest/login/sidelogin3.png'

const SignUp = () => {
    return (
        <div className='bg-no-repeat' style={{ backgroundImage: `url(${loginbg})` }}>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:w-5/12 lg:text-left">
                        <h1 className="text-5xl text-end font-bold">SignUp now!</h1>
                        <p className='text-md text-end mt-4 font-bold'>Already have an account? <Link to={'/login'} className='text-secondary underline decoration-1'>Login</Link></p>
                    </div>
                    <div className="card lg:card-side w-full lg:w-8/12 bg-base-100 shadow-2xl">
                        <figure>
                            <img src={sidepic} className="w-full hidden lg:block h-full" alt="Album" />
                        </figure>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;