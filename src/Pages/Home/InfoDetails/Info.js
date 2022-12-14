import React from 'react';
import icon1 from '../../../Assest/info/icon-1.png'
import icon2 from '../../../Assest/info/icon-2.png'
import icon3 from '../../../Assest/info/icon-3.png'
import icon4 from '../../../Assest/info/icon-email.png'

const Info = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full lg:w-8/12 p-10  mx-auto md:-mt-14 shadow-2xl">
                <div className=" flex flex-col justify-center md:flex-row md:justify-evenly">
                    <div className='flex items-center flex-col lg:flex-row my-6 md:my-0 mx-2'>
                        <div>
                            <img src={icon3} alt="" />
                        </div>
                        <div className=''>
                            <p>Monday-Friday</p>
                            <p className='font-bold'><small>10.00am-10.00pm</small></p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col lg:flex-row my-6 md:my-0 mx-2'>
                        <div>
                            <img src={icon2} alt="" />
                        </div>
                        <div className=''>
                            <p>App store | Playstore</p>
                            <p className='font-bold'><small>DownLoad mobile app</small></p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col lg:flex-row my-6 md:my-0 '>
                        <div>
                            <img src={icon1} alt="" />
                        </div>
                        <div className='mx-1'>
                            <p>Gulshan, Dhaka</p>
                            <p className='font-bold'><small>Address</small></p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col lg:flex-row my-6 md:my-0 mx-2'>
                        <div>
                            <img src={icon4} alt="" />
                        </div>
                        <div className=''>
                            <p>Get an invoice</p>
                            <p className='font-bold'><small>Email Us</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;