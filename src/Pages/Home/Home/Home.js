import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../InfoDetails/Info';
import Category from '../Category/Category'
import Subscribe from '../Subscribe/Subscribe';
import AdvertiseItem from '../AdvertiseItem/AdvertiseItem';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>

            <section>
                <Info></Info>
            </section>
            <section className="mt-32">
                <Category></Category>
            </section>
            <section className='my-14'>
                <AdvertiseItem></AdvertiseItem>
            </section>
            <section className='my-10'>
                <Subscribe></Subscribe>
            </section>

        </div>
    );
};

export default Home;