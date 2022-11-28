import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginbg from '../../Assest/login/loginbg.PNG'
import sidepic from '../../Assest/login/sidelogin3.png'
import { authContext } from '../../Context/AuthProvider';
import { getToken } from '../../Token/Token';

const Login = () => {

    //use location and navigate
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/home'
    const navigate = useNavigate();

    //use context
    const { login, googleSignin } = useContext(authContext);

    //state for error
    const [error, setError] = useState(null)

    //using react hook form
    const { register, handleSubmit, formState: { errors } } = useForm()

    //handle login
    const handleLogin = (data) => {

        console.log(data);

        //handle login context
        login(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                getToken(data.email)
                navigate(from, { replaced: true })
                setError(null)
            })
            .catch(err => {

                console.log(err)
                setError(err.message)
            })
    }

    //google login
    const provider = new GoogleAuthProvider()

    const handleGoogle = () => {

        const role = 'Buyer'

        googleSignin(provider)
            .then(res => {

                const user = res.user;
                console.log(user)
                postUser(user.displayName, user.email, role)
                getToken(user.email)
                navigate(from, { replaced: true })

            })
            .catch(err => console.log(err))

    }

    // post user
    const postUser = (name, email, role) => {

        const currentUser = {

            name,
            email,
            role
        }

        fetch('https://e-mobo-server.vercel.app/user', {
            method: "POST",
            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)

            })

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
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleLogin)} >

                                <div className='mt-2 text-left'>

                                    <label htmlFor="email">Email</label>
                                    <input {...register('email', { required: 'This field is required' })} type="email" placeholder='email' className="input input-bordered w-full mt-1" />

                                    {errors.email && <p className='text-red-600'><small>{errors.email.message}</small></p>}

                                </div>

                                <div className='mt-2 text-left'>

                                    <label htmlFor="password">Password</label>
                                    <input  {...register('password', { required: 'This field is required', minLength: { value: 6, message: 'Password Should be 6 length long' } })} placeholder='Password' type="password" className="input input-bordered w-full mt-1" />

                                    {errors.password && <p className='text-red-600'><small>{errors.password.message}</small></p>}
                                    <p className='text-red-600 my-2'><small>{error}</small></p>
                                </div>


                                <div className="form-control">
                                    <button className="btn btn-primary mt-2 text-white">Login</button>
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogle} className='btn btn-outline mt-4'><FaGoogle className='text-accent mr-2' /> Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;