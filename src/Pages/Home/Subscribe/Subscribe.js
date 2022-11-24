import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className="hero bg-secondary p-10">
                <div className="hero-content w-full mx-auto  flex-col lg:flex-row justify-evenly">

                    <div className=''>
                        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">GET DISCOUNT 30% OFF
                        </h1>
                        <p className='text-red-600 font-bold my-2'>SIGN UP TO OUR NEWSLETTER AND GET THE DISCOUNT CODE.
                        </p>
                    </div>
                    <div>
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Email Address" className="input input-bordered lg:w-80 lg:h-16" />
                                <button className="btn btn-square text-white font-bold btn-info w-24 lg:w-32 lg:h-16">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;