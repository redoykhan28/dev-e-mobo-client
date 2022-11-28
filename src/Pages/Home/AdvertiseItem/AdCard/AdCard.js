import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../../Context/AuthProvider';
import useBuyer from '../../../../Hooks/BuyerHooks';

const AdCard = ({ ad }) => {

    //use context
    const { user } = useContext(authContext)

    //use buyer hook
    const [isBuyer] = useBuyer(user?.email)


    const { product, phone, location, seller, image, price, category } = ad
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product}</h2>
                <div className='flex justify-between items-center'>
                    <h5>Price: <span className='font-bold'>{price}</span>TK</h5>
                    <h5>Phone: {phone}</h5>
                </div>
                <h5 className='text-left'>Location: {location}</h5>
                <h5 className='text-left'>Seller: {seller}</h5>
                <div className="card-actions justify-end">
                    {
                        isBuyer ?
                            <Link to={`/product/${category}`} className='btn bg-primary text-white hover:bg-accent'>Explore</Link>
                            :

                            <div>
                                <p>You are not a buyer!For login asa a buyer <Link className='text-primary underline decoration-1' to={'/login'}>click here</Link></p>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdCard;