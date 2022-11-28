import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const ProductModal = ({ productBook, setProductBook }) => {
    //use context
    const { user } = useContext(authContext)

    //use navigate
    const navigate = useNavigate()

    //set date
    const date = format(new Date(), 'PP')

    //distructure product info
    const { _id, product_name, selling_price, } = productBook

    //using react hook form
    const { register, handleSubmit, formState: { errors } } = useForm()

    //handle booking
    const handleBooking = (data) => {

        console.log(data)

        const currentBooking = {

            product_name: product_name,
            price: selling_price,
            purchase_user: user?.displayName,
            purchase_userMail: user?.email,
            location: data.location,
            phone: data.phone,
            product_id: _id,
            purchase_date: date
        }

        // post data for booking 
        fetch('https://e-mobo-server.vercel.app/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(currentBooking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    console.log(data)
                    toast.success('purchased succesfully')
                    navigate('/myorder')
                    setProductBook(null)
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label onClick={() => setProductBook(null)} htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute bg-accent text-white hover:bg-black right-2 top-2">✕</label>

                    <h3 className='text-center text-2xl my-2 mb-4 font-bold'>Checkout</h3>
                    <form className='grid grid-cols-1 gap-4' onSubmit={handleSubmit(handleBooking)}>
                        <div className='text-left'>
                            <label htmlFor="name">Product Name</label>
                            <input type="text" disabled value={product_name} className="input input-bordered w-full mt-2" />
                        </div>

                        <div className='text-left'>
                            <label htmlFor="price">Price</label>
                            <input type="text" disabled value={selling_price} className="input input-bordered mt-2 w-full" />

                        </div>

                        <div className='text-left'>
                            <label htmlFor="username">Username</label>
                            <input name='username' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full mt-2" />
                        </div>

                        <div className='text-left'>
                            <label htmlFor="email">Email Address</label>
                            <input name='email' type="text" defaultValue={user?.email} disabled className="input input-bordered w-full mt-2" />
                        </div>

                        <div className='text-left'>
                            <label htmlFor="location">Delivery Location</label>
                            <input {...register('location', { required: 'This field is required' })} type="text" placeholder="Meeting Location" className="input input-bordered w-full mt-2" />
                            {errors.location && <p className='text-red-600'><small>{errors.location.message}</small></p>}
                        </div>

                        <div className='text-left'>
                            <label htmlFor="phone">Phone</label>
                            <input {...register('phone', { required: 'This field is required' })} type="text" placeholder="Phone No:" className="input input-bordered w-full mt-1" />
                            {errors.phone && <p className='text-red-600'><small>{errors.phone.message}</small></p>}
                        </div>
                        <div className="modal-action">
                            <input onClick={() => setProductBook(null)} htmlFor="my-modal-6" type="button" className='btn btn-accent text-white  mt-4' value={'cancel'} />
                            <input htmlFor="my-modal-6" type="submit" className='btn btn-primary text-white  mt-4' value={'Purchase'} />
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default ProductModal;