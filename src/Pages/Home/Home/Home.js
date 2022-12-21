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

            <section data-aos="fade-up">
                <Info></Info>
            </section>

            <section data-aos='zoom-in' className="mt-32">
                <Category></Category>
            </section>

            <section data-aos='zoom-in' className='my-20'>
                <AdvertiseItem></AdvertiseItem>
            </section>

            <section data-aos='fade-up' className='my-10'>
                <Subscribe></Subscribe>
            </section>

        </div>
    );
};

export default Home;