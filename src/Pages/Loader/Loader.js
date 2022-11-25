import React from 'react';

const Loader = () => {
    return (
        <div>
            <div>
                <div className='my-32 text-center'>
                    <p className=' text-md text-secondary'>Loading...</p>
                    <progress className="progress w-56 text-secondary"></progress>
                </div>
            </div>
        </div>
    );
};

export default Loader;