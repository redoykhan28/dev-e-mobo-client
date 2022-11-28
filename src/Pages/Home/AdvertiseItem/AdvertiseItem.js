import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../Loader/Loader';
import ProductModal from '../../Products/ProductModal';
import AdCard from './AdCard/AdCard';

const AdvertiseItem = () => {




    const { data: advertises = [], refetch, isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: () => fetch('http://localhost:5000/advertise')
            .then(res => res.json())
    })

    if (isLoading) {

        return <Loader></Loader>
    }


    return (

        <div className='w-11/12 mx-auto'>
            {
                !advertises.paid && advertises &&

                <div>
                    <h3 className='font-bold text-3xl'>Browse Advertise Items</h3>
                    <p>Checkout advertise products</p>
                    <div className='mt-12 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                        {
                            advertises?.map(ad => <AdCard key={ad._id} ad={ad} ></AdCard>)
                        }
                    </div>
                </div>
            }
        </div>

    );
};

export default AdvertiseItem;