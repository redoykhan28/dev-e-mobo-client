import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../Context/AuthProvider';
import Loader from '../../Loader/Loader';

const MyBooking = () => {

    //use context
    const { user } = useContext(authContext)

    const { data: myBookings = [], isLoading } = useQuery({
        queryKey: ['mybooking'],
        queryFn: () => fetch(`http://localhost:5000/myBookings/?email=${user?.email}`, {

            headers: {

                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
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
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Purchase Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myBookings?.map((booking, i) =>
                                    <tr key={booking._id} className="hover">

                                        <td>{i + 1}</td>
                                        <td>{booking.product_name}</td>
                                        <td>{booking.price}</td>
                                        <td>{booking.location}</td>
                                        <td>{booking.purchase_date}</td>

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