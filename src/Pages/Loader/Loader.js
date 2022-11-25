import React from 'react';

const Loader = () => {
    return (
        <div>
            <div>
                <div className='my-32 text-center'>
                    <p className=' text-md text-accent'>Loading...</p>
                    <progress className="progress bg-accent w-56"></progress>
                </div>
            </div>
        </div>
    );
};

export default Loader;