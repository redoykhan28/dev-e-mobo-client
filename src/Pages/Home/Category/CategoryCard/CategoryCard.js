import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CategoryCard = ({ category }) => {
    const { name, image } = category
    console.log(category)
    return (
        <div>
            <div className="card w-72 mx-auto bg-base-100 shadow-2xl rounded-none	">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title">{name}</h2>
                        <Link to={`/product/${name}`} className="text-primary text-xl font-bold"><FaArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;