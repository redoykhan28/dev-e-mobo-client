import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../Context/AuthProvider';

const MyProduct = () => {
    //use context
    const { user } = useContext(authContext)

    //use query
    const { data: myProducts = [] } = useQuery({

        queryKey: ['my products'],
        queryFn: () => fetch(`http://localhost:5000/myproducts?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })


    return (
        <div>
            <h4 className='text-center text-2xl font-bold my-4'>My Uploaded Products</h4>
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table w-11/12 mx-auto rounded-2xl shadow-xl">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>category</th>
                                <th>published Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myProducts?.map((product, i) =>
                                    <tr key={product._id}>

                                        <td>{i + 1}</td>
                                        <td>
                                            <div className='flex items-center'>
                                                <div className="avatar mx-2">
                                                    <div className="w-10 rounded-full">
                                                        <img src={product.product_img} alt="product" />
                                                    </div>
                                                </div>
                                                {product.product_name}
                                            </div>
                                        </td>
                                        <td>{product.selling_price}TK</td>
                                        <td>{product.category}</td>
                                        <td>{product.published_date}</td>

                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;