import React from 'react';

const loading = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center'>
            <span className="loading loading-spinner loading-lg text-error"></span>
        </div>
    );
};

export default loading;