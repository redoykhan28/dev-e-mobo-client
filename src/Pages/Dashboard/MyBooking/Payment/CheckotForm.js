import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CheckotForm = ({ purchase }) => {

    //distructure 
    const { price, purchase_userMail, purchase_user, _id, product_id } = purchase;

    //state for error
    const [errorCard, setErrorCard] = useState('')

    //state for success and transection
    const [success, setSuccess] = useState('')
    const [transaction, setTransaction] = useState('')


    //state for client secret
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`

            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);



    //use stripe
    const stripe = useStripe()

    //use elemets
    const elements = useElements()

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {

            setErrorCard(error.message)
        }

        else {
            setErrorCard('')
        }

        setSuccess('')
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: purchase_user,
                        email: purchase_userMail
                    },
                },
            },
        );

        if (confirmError) {

            return setErrorCard(confirmError.message)
        }

        if (paymentIntent.status === "succeeded") {

            const currentPayment = {

                price,
                transectionId: paymentIntent.id,
                purchaseUser: purchase_userMail,
                purchasedId: _id,
                product_id: product_id

            }

            fetch('http://localhost:5000/payemnts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(currentPayment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment is completed...');
                        setTransaction(paymentIntent.id)
                    }
                })
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary text-white mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className='text-red-600 my-2'>{errorCard}</p>

            {
                success &&
                <div className='mt-12'>
                    <p className='text-green-500'>{success}</p>
                    <p>Your TransactionId: <span className='font-bold'>{transaction}</span> </p>
                </div>
            }

        </div>
    );
};

export default CheckotForm;