import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const Products = () => {

    //state fpr product
    const [productBook, setProductBook] = useState({})

    //load data
    const products = useLoaderData()
    // console.log(products)

    //report a product
    const reportProduct = (id) => {
        console.log(id)
        fetch(`https://e-mobo-server.vercel.app/reportProduct/${id}`, {

            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`

            }
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                toast.success("Reported successfully")
            })
    }

    return (
        <div className='w-11/12 mx-auto'>
            {
                products &&
                <div data-aos="zoom-in">
                    <h1 className='mt-6 mb-4 text-primary text-2xl lg:text-3xl text-center'>Buy Phone in a resonable price</h1>
                    <p className='font-bold'>Category: {products[0]?.category}</p>

                    <div className='mt-8'>
                        {

                            products?.map(product =>
                                <ProductCard key={product._id} product={product} setProductBook={setProductBook} reportProduct={reportProduct}></ProductCard>)
                        }
                    </div>
                </div>
            }

            <div>
                {
                    productBook &&
                    <ProductModal data-aos='fade-up' productBook={productBook} setProductBook={setProductBook}></ProductModal>
                }
            </div>

        </div>
    );
};

export default Products;