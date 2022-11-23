import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {
    //use query
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('category.json')
            .then(res => res.json())
    })
    return (
        <div className=''>
            <h3 className='font-bold text-3xl'>Product Category</h3>
            <p className='font-bold text'>Tital Categories: {categories.length}</p>
        </div>
    );
};

export default Categories;