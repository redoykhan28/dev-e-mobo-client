import React from 'react';

const Loader = () => {
    return (
        <div>
            <div>
                <div className='mt-32 text-center'>
                    <p className=' text-md text-primary'>Loading...</p>
                    <progress className="progress w-56 text-primary"></progress>
                </div>
            </div>
        </div>
    );
};

export default Loader;