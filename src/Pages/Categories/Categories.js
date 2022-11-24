import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryCard from '../Home/Category/CategoryCard/CategoryCard';

const Categories = () => {
    //use query
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories/all')
            .then(res => res.json())
    })
    return (
        <div className='mb-12'>
            <h3 className='font-bold text-3xl'>Product Category</h3>
            <p className='font-bold text mt-1'>Total Categories: {categories.length}</p>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    categories?.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                }

            </div>

        </div>
    );
};

export default Categories;