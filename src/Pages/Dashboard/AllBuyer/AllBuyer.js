import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AdminModal from '../AllSeller/AdminModal/AdminModal';
import BuyerModal from './BuyerModal/BuyerModal';

const AllBuyer = () => {

    //state for admin
    const [admin, setAdmin] = useState(null)

    //deleting buyer
    const [deleteBuyer, setDeleteBuyer] = useState(null)

    //use query
    const { data: allBuyers = [], refetch } = useQuery({

        queryKey: ['all buyer'],
        queryFn: () => fetch('https://e-mobo-server.vercel.app/allbuyer/?role=Buyer', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })

    return (

        <div data-aos="fade-up">
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
                                        <td><label onClick={() => setAdmin(buyer)} htmlFor="shared-modal" className="btn btn-sm bg-orange-500 text-white hover:bg-accent">Make Admin</label>
                                        </td>
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
                <div>
                    {
                        admin &&
                        <AdminModal refetch={refetch} admin={admin} setAdmin={setAdmin}></AdminModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBuyer;