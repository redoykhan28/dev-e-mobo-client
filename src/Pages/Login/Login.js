import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginbg from '../../Assest/login/loginbg.PNG'
import sidepic from '../../Assest/login/sidelogin3.png'

const Login = () => {


    //using react hook form
    const { register, handleSubmit, formState: { errors } } = useForm()

    //handle signup
    const handleSignUp = (data) => {

        console.log(data)
    }


    return (
        <div className='bg-no-repeat' style={{ backgroundImage: `url(${loginbg})` }}>

            <div className="hero lg:min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:w-5/12 lg:text-left">
                        <h1 className="text-5xl mt-16 lg:mt-0 text-end font-bold text-primary lg:text-black">Login now!</h1>
                        <p className='text-md text-end mt-4 font-bold text-primary lg:text-black'>Need an Account? <Link to={'/signup'} className='text-secondary underline decoration-1'>SignUp</Link></p>
                    </div>
                    <div className="card lg:card-side w-full lg:w-8/12 bg-base-100 shadow-2xl">
                        <figure>
                            <img src={sidepic} className="w-full hidden lg:block h-full" alt="Album" />
                        </figure>
                        <form onSubmit={handleSubmit(handleSignUp)} className="card-body">

                            <div className='mt-2 text-left'>

                                <label htmlFor="email">Email</label>
                                <input {...register('email', { required: 'This field is required' })} type="email" placeholder='email' className="input input-bordered w-full mt-1" />

                                {errors.email && <p className='text-red-600'><small>{errors.email.message}</small></p>}

                            </div>

                            <div className='mt-2 text-left'>

                                <label htmlFor="password">Password</label>
                                <input  {...register('password', { required: 'This field is required', minLength: { value: 6, message: 'Password Should be 6 length long' } })} placeholder='Password' type="password" className="input input-bordered w-full mt-1" />

                                {errors.password && <p className='text-red-600'><small>{errors.password.message}</small></p>}

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;