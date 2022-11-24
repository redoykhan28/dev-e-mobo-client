import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginbg from '../../Assest/login/loginbg.PNG'
import sidepic from '../../Assest/login/sidelogin3.png'
import { authContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';


const SignUp = () => {

    //use context
    const { signUp, updateUser } = useContext(authContext)

    //using react hook form
    const { register, handleSubmit, formState: { errors } } = useForm()

    //handle signup
    const handleSignUp = (data) => {

        console.log(data)

        //handling signup
        signUp(data?.email, data?.password)
            .then(res => {

                const user = res.user;
                console.log(user);
                handleProfile(data.name)
                toast.success('Successfully SignUp!')
            })
            .catch(err => console.error(err))
    }

    //update profile
    const handleProfile = (name) => {

        updateUser(name)
            .then(() => console.log('Profile updated:', name))
            .catch(err => console.log(err))
    }


    return (
        <div className='bg-no-repeat' style={{ backgroundImage: `url(${loginbg})` }}>

            <div className="hero lg:min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:w-5/12 lg:text-left">
                        <h1 className="text-5xl text-end text-primary lg:text-black mt-16 lg:mt-0 font-bold">SignUp now!</h1>
                        <p className='text-md text-end mt-4 text-primary lg:text-black font-bold'>Already have an account? <Link to={'/login'} className='text-secondary underline decoration-1'>Login</Link></p>
                    </div>
                    <div className="card lg:card-side w-full lg:w-8/12 bg-base-100 shadow-2xl">

                        <figure>
                            <img src={sidepic} className="w-full hidden lg:block h-full" alt="Album" />
                        </figure>

                        <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                            <div className='text-left'>

                                <label htmlFor="name">Username</label>
                                <input {...register('name', { required: 'This field is required' })} placeholder='Username' type="text" className="input input-bordered w-full mt-1" />

                                {errors.name && <p className='text-red-600'><small>{errors.name.message}</small></p>}

                            </div>

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

                            <div className='mt-2 text-left'>

                                <label htmlFor="role">Role</label>
                                <select className="select select-bordered w-full rounded-lg mt-1" {...register('role')}>
                                    <option defaultValue>Buyer</option>
                                    <option>Seller</option>
                                </select>

                                {errors.password && <p className='text-red-600'><small>{errors.password.message}</small></p>}

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SignUp;