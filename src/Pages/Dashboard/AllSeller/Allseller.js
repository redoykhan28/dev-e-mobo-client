import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
import SellerModal from './SellerModal/SellerModal';

const Allseller = () => {

    //deleting seller
    const [deleteSeller, setDeleteSeller] = useState(null)

    //use query
    const { data: allSeller = [], refetch } = useQuery({

        queryKey: ['all seller'],
        queryFn: () => fetch('http://localhost:5000/allseller/?role=Seller', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })

    // update seller to admin 
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

    //verify a seller
    const handleVerifySeller = (id) => {

        fetch(`http://localhost:5000/seller/verify/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    toast.success(`Seller verified`)
                }
            })
    }

    return (
        <div>
            <h4 className='text-center text-2xl font-bold my-4'>Sellers Data</h4>
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table w-11/12 mx-auto rounded-2xl shadow-xl">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Sellers Name</th>
                                <th>email</th>
                                <th>Admin</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allSeller?.map((seller, i) =>
                                    <tr key={seller._id}>
                                        <td>{i + 1}</td>
                                        <td>{seller.name}</td>
                                        <td>{seller.email}</td>
                                        <td><button onClick={() => handleAdmin(seller._id)} className='btn btn-sm bg-orange-500 text-white hover:bg-accent'>Make Admin</button></td>
                                        {
                                            seller?.role === 'admin' ?
                                                <td><p className='text-blue-600 font:bold'>Verified <FaCheckCircle></FaCheckCircle> </p></td>
                                                :
                                                <td><button onClick={() => handleVerifySeller(seller._id)} className='btn btn-sm bg-accent text-white hover:bg-black border-0'>Verify Seller</button></td>
                                        }
                                        <td>
                                            <label onClick={() => setDeleteSeller(seller)} htmlFor="shared-modal" className="btn btn-sm bg-red-600 text-white hover:bg-accent border-0">Delete</label>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div>

                    {
                        deleteSeller &&
                        <SellerModal refetch={refetch} deleteSeller={deleteSeller} setDeleteSeller={setDeleteSeller} message={'Are you sure you wants to delete?'}></SellerModal>

                    }

                </div>
            </div>
        </div>
    );
};

export default Allseller;