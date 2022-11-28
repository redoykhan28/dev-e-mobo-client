import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/AuthProvider';
import ProductModal from './ProductModal/ProductModal';

const MyProduct = () => {
    //use context
    const { user, logout } = useContext(authContext)

    //deleting product
    const [deleteProduct, setDeleteProduct] = useState(null)

    //use query
    const { data: myProducts = [], refetch } = useQuery({

        queryKey: ['my products'],
        queryFn: () => fetch(`http://localhost:5000/myproducts?email=${user?.email}`, {
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


    const handleAdvertise = (ad) => {

        const currentAd = {

            product: ad.product_name,
            price: ad.selling_price,
            seller: ad.seller_name,
            product_id: ad._id,
            phone: ad.phone,
            location: ad.location,
            image: ad.product_img,
            paid: ad.paid,
            category: ad.category

        }

        console.log(ad._id)
        fetch(`http://localhost:5000/adproduct`, {
            method: "POST",
            headers: {

                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`

            },
            body: JSON.stringify(currentAd)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                toast.success('Advertise added successfully')

            })
    }


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
                                <th>Status</th>
                                <th>Action</th>
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

                                        <td>
                                            {
                                                product.paid === true ?
                                                    <p className='text-red-600'>Sold out</p>
                                                    :
                                                    <div className='flex items-center'>
                                                        <p className='text-green-600'>Available</p>
                                                        <button onClick={() => handleAdvertise(product)} className='btn btn-xs mx-1 bg-accent text-white hover:bg-black'>Ad</button>
                                                    </div>
                                            }
                                        </td>

                                        <td>
                                            <label onClick={() => setDeleteProduct(product)} htmlFor="shared-modal" className="btn btn-sm bg-red-600 text-white hover:bg-accent border-0">Delete</label>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                {
                    deleteProduct &&
                    <ProductModal refetch={refetch} deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} message={'Are you sure you wants to delete?'}></ProductModal>

                }

            </div>
        </div>
    );
};

export default MyProduct;