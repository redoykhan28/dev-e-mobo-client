import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {

    //use query
    const { data: allBuyers = [] } = useQuery({

        queryKey: ['all buyer'],
        queryFn: () => fetch('http://localhost:5000/allbuyer/?role=Buyer')
            .then(res => res.json())
    })

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
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allBuyers?.map((buyer, i) =>
                                    <tr key={buyer._id} className="hover">

                                        <td>{i + 1}</td>
                                        <td>{buyer.name}</td>
                                        <td>{buyer.email}</td>
                                        <td><button className='btn btn-sm bg-orange-500 text-white hover:bg-accent'>Admin</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyer;