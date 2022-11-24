import React from 'react';
import appoiment from '../../../Assest/banner/bannerBg3.PNG'
import headerimg from '../../../Assest/banner/header3.png'

const Banner = () => {
    return (
        <div className='' >
            <div className="hero h-screen" style={{ backgroundImage: `url(${appoiment})` }}>
                <div className="hero-content flex-col lg:flex-row -mt-44 lg:-mt-24">

                    <div className='lg:w-1/2 text-start'>
                        <h1 className="text-5xl font-bold">Let's Buy a Phone safely!</h1>
                        <p className="py-6">when it's About Purchasing a resale phone then E-Mobo is the besi site you got. purchase your phone comfortably..!</p>
                        <button className="btn btn-secondary font-bold">Get Started</button>
                    </div>
                    <div className='lg:w-1/2'>
                        <img src={headerimg} className=" rounded-xl" alt='img' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;