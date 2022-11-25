import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='mt-6 mb-4 text-primary text-2xl lg:text-3xl text-center'>Buy Phone in a resonable price</h1>
            <p className='font-bold'>Total Products: {products.length}</p>

            <div className='mt-8'>
                {
                    products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default Products;