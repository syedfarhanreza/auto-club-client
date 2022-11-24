import React from 'react';
import banner from '../../../assets/banner/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl text-white font-bold">AutoClub</h1>
                    <p className="mb-5 text-3xl  text-white font-bold">Find Your Dream Car</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;