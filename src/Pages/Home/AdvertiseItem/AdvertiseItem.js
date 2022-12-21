import React, { useState, useEffect } from 'react';
import AdCard from './AdCard/AdCard';

const AdvertiseItem = () => {


    const [advertises, setAdvertises] = useState([])
    useEffect(() => {
        fetch('https://e-mobo-server.vercel.app/vertise/items?advertise=true')
            .then(res => res.json())
            .then(data => setAdvertises(data))
    }, [])

    return (


        < div className='w-11/12 mx-auto' >
            {
                advertises.length > 0 &&
                < div >
                    <h3 className='font-bold text-3xl'>Browse Advertise Items</h3>
                    <p>Checkout advertise products:{advertises.length}</p>
                    <div className='mt-12 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                        {
                            advertises?.map(ad => <AdCard key={ad._id} ad={ad} ></AdCard>)
                        }
                    </div>
                </div >
            }
        </div >

    );
};

export default AdvertiseItem;