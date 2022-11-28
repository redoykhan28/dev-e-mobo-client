import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Context/AuthProvider';
import Loader from '../../Loader/Loader';

const MyBooking = () => {

    //use context
    const { logout, user } = useContext(authContext)

    const { data: myBookings = [], isLoading } = useQuery({
        queryKey: ['mybooking'],
        queryFn: () => fetch(`https://e-mobo-server.vercel.app/myBookings/?email=${user?.email}`, {

            headers: {

                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    return logout()


                }
                return res.json()
            })
    })

    if (isLoading) {

        return <Loader></Loader>
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h4 className='text-center text-2xl font-bold my-4'>My Orders</h4>
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table w-11/12 mx-auto rounded-2xl shadow-xl">
                        <thead >
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Purchase Date</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myBookings?.map((booking, i) =>
                                    <tr key={booking._id}>

                                        <td>{i + 1}</td>
                                        <td>{booking.product_name}</td>
                                        <td>{booking.price}</td>
                                        <td>{booking.location}</td>
                                        <td>{booking.purchase_date}</td>
                                        <td>
                                            {
                                                booking.price && !booking.paid && <Link to={`/payment/${booking._id}`} className='btn btn-xs bg-primary text-white hover:bg-accent border-0'>Payment</Link>

                                            }

                                            {
                                                booking.price && booking.paid && <span className='text-green-500 font-bold'>Paid</span>
                                            }
                                        </td>

                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;