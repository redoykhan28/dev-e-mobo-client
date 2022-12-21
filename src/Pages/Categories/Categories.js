import { useQuery } from '@tanstack/react-query';
import CategoryCard from '../Home/Category/CategoryCard/CategoryCard';
import Loader from '../Loader/Loader';

const Categories = () => {

    //use query
    const { data: allCategories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch('https://e-mobo-server.vercel.app/categories/all')
            .then(res => res.json())
    })

    if (isLoading) {

        return <Loader></Loader>
    }

    return (
        <div className='mb-12'>
            <h3 data-aos="fade-up" className='font-bold text-3xl'>Product Category</h3>
            <p data-aos="fade-up" className='font-bold text mt-1'>Total Categories: {allCategories?.length}</p>
            <div data-aos="zoom-in" className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    allCategories?.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                }

            </div>

        </div>
    );
};

export default Categories;