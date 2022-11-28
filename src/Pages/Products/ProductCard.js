import React, { useContext } from 'react';
import { authContext } from '../../Context/AuthProvider';
import useBuyer from '../../Hooks/BuyerHooks';
import useVerify from '../../Hooks/verifyHook';
import { FaCheckCircle, FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const ProductCard = ({ product, setProductBook }) => {

    //use context
    const { user } = useContext(authContext)

    //use buyer hook
    const [isBuyer] = useBuyer(user?.email)



    const { _id, product_name, phone, purchase_price, selling_price, location, purchase_date, published_date, product_img, condition, details, seller_name, seller_email } = product

    //use verify hook
    const [isVerify] = useVerify(seller_email)

    const reportProduct = (id) => {

        fetch(`https://e-mobo-server.vercel.app/reportProduct/${id}`, {

            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`

            }
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                toast.success("Reported successfully")
            })
    }

    return (
        <div>
            <div className="card my-10 lg:card-side w-full lg:w-11/12 mx-auto lg:h-96 bg-base-100 shadow-xl">
                <figure className='lg:w-1/2'><img src={product_img} alt="Album" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title">{product_name}</h2>
                    <p className='text-start'><span className='font-bold'>Specification: </span>{details}</p>

                    <div className='flex flex-col md:flex-row mt-4 justify-between'>
                        <h5 className='text-start font-bold'>Price: {selling_price}TK</h5>
                        <h5 className='text-start font-bold'>Purchase Price: {purchase_price}TK</h5>
                    </div>

                    <div className='flex justify-between'>
                        <h5 className='text-start'>Location: {location}</h5>
                        <h5 className='text-start'>Purchase Date: {purchase_date}</h5>
                    </div>

                    <div className='flex justify-between'>
                        {
                            isVerify ?
                                <div className='flex items-center'>
                                    <h5 className='text-start mr-1'><span className='font-bold'> Seller:</span> {seller_name}</h5>
                                    <FaCheckCircle className='text-blue-600'></FaCheckCircle>
                                </div>
                                :
                                <h5 className='text-start'><span className='font-bold'> Seller:</span> {seller_name}</h5>
                        }
                        <h5 className='text-start'>Phone: {phone}</h5>
                    </div>


                    <h5 className='text-start'>Condition: <span className='text-primary font-bold'>{condition}</span></h5>

                    <div className="card-actions justify-between items-center">
                        <div>
                            <h5 className='text-start'>Published at: {published_date}</h5>
                            <div className='flex items-center'>
                                <FaQuestionCircle className='text-red-600 mr-2 my-2' />
                                <Link to={() => reportProduct(_id)} className='text-red-600'> Report to admin</Link>
                            </div>
                        </div>

                        {
                            isBuyer &&
                            <label onClick={() => setProductBook(product)} htmlFor="my-modal-6" className="btn btn-primary text-white">Purchase</label>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;