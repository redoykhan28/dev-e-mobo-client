import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard/CategoryCard';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';


const Category = () => {
    //use query
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories/limit')
            .then(res => res.json())
    })

    if (isLoading) {

        return <Loader></Loader>
    }

    return (
        <div className='w-4/5 mx-auto'>
            <h3 className='font-bold text-3xl'>Browse Leatest Category</h3>
            <p>Checkout products Categories</p>
            <div className='mt-12 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    categories?.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                }

            </div>
            <Link to={'/categories'} className='btn btn-secondary'>See More</Link>
        </div>
    );
};

export default Category;