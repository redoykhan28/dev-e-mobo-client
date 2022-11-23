import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard/CategoryCard';
import { Link } from 'react-router-dom';


const Category = () => {
    //use query
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('category.json')
            .then(res => res.json())
    })

    return (
        <div className='w-4/5 mx-auto'>
            <h3 className='font-bold text-3xl'>Browse Category</h3>
            <p>Checkout products Categories</p>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    categories?.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                }

            </div>
            <Link to={'/categories'} className='text-secondary'>See More</Link>
        </div>
    );
};

export default Category;