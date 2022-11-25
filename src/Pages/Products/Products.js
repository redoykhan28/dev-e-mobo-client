import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const Products = () => {

    //state fpr product
    const [productBook, setProductBook] = useState({})

    //load data
    const products = useLoaderData()
    // console.log(products)

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='mt-6 mb-4 text-primary text-2xl lg:text-3xl text-center'>Buy Phone in a resonable price</h1>
            <p className='font-bold'>Total Products: {products.length}</p>

            <div className='mt-8'>
                {
                    products?.map(product => <ProductCard key={product._id} product={product} setProductBook={setProductBook}></ProductCard>)
                }
            </div>

            <div>
                {
                    productBook &&
                    <ProductModal productBook={productBook} setProductBook={setProductBook}></ProductModal>
                }
            </div>

        </div>
    );
};

export default Products;