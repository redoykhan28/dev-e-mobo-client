import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import BuyerModal from './BuyerModal/BuyerModal';

const AllBuyer = () => {

    //deleting buyer
    const [deleteBuyer, setDeleteBuyer] = useState(null)

    //use query
    const { data: allBuyers = [], refetch } = useQuery({

        queryKey: ['all buyer'],
        queryFn: () => fetch('http://localhost:5000/allbuyer/?role=Buyer', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })


    // update buyer to admin 
    const handleAdmin = (id) => {

        fetch(`http://localhost:5000/admin/${id}`, {

            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success("Admin added successfully")
                    refetch()
                }
            })

    }

    return (

        <div>
            <h4 className='text-center text-2xl font-bold my-4'>Buyers Data</h4>
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table w-11/12 mx-auto rounded-2xl shadow-xl">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Buyers Name</th>
                                <th>email</th>
                                <th>Admin</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allBuyers?.map((buyer, i) =>
                                    <tr key={buyer._id}>

                                        <td>{i + 1}</td>
                                        <td>{buyer.name}</td>
                                        <td>{buyer.email}</td>
                                        <td><button onClick={() => handleAdmin(buyer._id)} className='btn btn-sm bg-orange-500 text-white hover:bg-accent border-0'>Make Admin</button></td>
                                        <td>
                                            <label onClick={() => setDeleteBuyer(buyer)} htmlFor="shared-modal" className="btn btn-sm bg-red-600 text-white hover:bg-accent border-0">Delete</label>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    {
                        deleteBuyer &&
                        <BuyerModal refetch={refetch} deleteBuyer={deleteBuyer} setDeleteBuyer={setDeleteBuyer} message={'Are you sure you wants to delete?'}></BuyerModal>

                    }
                </div>
            </div>
        </div>
    );
};

export default AllBuyer;