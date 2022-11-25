import React from 'react';

const ProductCard = ({ product }) => {

    const { product_name, phone, purchase_price, selling_price, location, purchase_date, published_date, product_img, condition, details } = product

    return (
        <div>
            <div className="card my-10 lg:card-side w-full lg:w-11/12 mx-auto lg:h-96 bg-base-100 shadow-xl">
                <figure className='lg:w-1/2'><img src={product_img} alt="Album" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title">{product_name}</h2>
                    <p className='text-start'><span className='font-bold'>Specification: </span>{details}</p>

                    <div className='flex mt-4 justify-between'>
                        <h5 className='text-start font-bold'>Price: {selling_price}TK</h5>
                        <h5 className='text-start font-bold'>Purchase Price: {purchase_price}TK</h5>
                    </div>

                    <div className='flex justify-between'>
                        <h5 className='text-start'>Location: {location}</h5>
                        <h5 className='text-start'>Purchase Date: {purchase_date}</h5>
                    </div>

                    <h5 className='text-start'>Phone: {phone}</h5>
                    <h5 className='text-start'>Condition: <span className='text-primary font-bold'>{condition}</span></h5>

                    <div className="card-actions justify-between items-center">
                        <h5 className='text-start'>Published at: {published_date}</h5>
                        <button className="btn btn-primary text-white">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;