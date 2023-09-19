import React from 'react';

const SideCart = () => {
    return (
        <div className='text-center'>
            <h1 className='text-center mt-4'> My Cart </h1>
            
            <div className='text-center mt-5'>
                <p> Total watch time </p>
                <input type="text" value='' disabled />
            </div>

            <h5 className='mt-5'> Add break time </h5>
            <button className='w-25 btn-circle m-1 btn btn-info'> 15 </button>
            <button className='w-25 btn-circle m-1 bg-warning btn'> 20 </button>
            <button className='w-25 btn-circle m-1 bg-danger btn'> 25 </button>

            <input className='mt-2' type="text" value='' disabled />
            <button className='mt-5 btn btn-info w-100'> Complete </button>
        </div>
    );
};

export default SideCart;