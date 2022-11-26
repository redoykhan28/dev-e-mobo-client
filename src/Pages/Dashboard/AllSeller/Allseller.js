import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allseller = () => {
    //use query
    const { data: allSeller = [] } = useQuery({

        queryKey: ['all seller'],
        queryFn: () => fetch('http://localhost:5000/allseller/?role=Seller')
            .then(res => res.json())
    })
    return (
        <div>
            <h4 className='text-center text-2xl font-bold my-4'>Sellers Data</h4>
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table w-11/12 mx-auto rounded-2xl shadow-xl">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Seller Name</th>
                                <th>email</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allSeller?.map((seller, i) =>
                                    <tr key={seller._id}>
                                        <td>{i + 1}</td>
                                        <td>{seller.name}</td>
                                        <td>{seller.email}</td>
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

export default Allseller;