import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../InfoDetails/Info';
import Category from '../Category/Category'

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
        </div>
    );
};

export default Home;