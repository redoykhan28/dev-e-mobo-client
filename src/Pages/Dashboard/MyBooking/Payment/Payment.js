import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckotForm from './CheckotForm';


const stripePromise = loadStripe(process.env.REACT_APP_stripe_PK);


const Payment = () => {

    const data = useLoaderData()
    console.log(data)
    const { product_name, price } = data

    return (
        <div className='text-start w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold mt-8'>Payment for {product_name}</h1>
            <p className='mt-1'>Pay <strong>{price}</strong> TK to purchase...</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckotForm purchase={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;