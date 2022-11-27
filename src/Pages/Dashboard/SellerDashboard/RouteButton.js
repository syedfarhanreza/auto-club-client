import React from 'react';
import { Link } from 'react-router-dom';

const RouteButton = () => {
    return (
        <div className='text-center flex justify-evenly'>
            <Link to='/dashboard/addProduct'><button className='btn btn-outline btn-sm'>Add Product</button></Link>
            <Link to='/dashboard/myProduct'><button className='btn btn-outline btn-sm mx-20'>My Product</button></Link>
            <Link to='/dashboard/mybuyer'><button className='btn btn-outline btn-sm'>My Buyers</button></Link>
        </div>
    );
};

export default RouteButton;