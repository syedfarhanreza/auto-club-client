import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {


    return (
        <div className='my-40'>
            <h1 className="text-center text-5xl font-bold mb-12">Categories</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-12'>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVkaSUyMGNhcnN8ZW58MHx8MHx8&w=1000&q=80" alt="Audi-Car" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">AUDI</h2>
                        <p>Checkout used AUDI Cars.</p>
                        <div className="card-actions justify-end">
                            <Link to='/audis'><button className="btn btn-outline text-white banner-title">See Cars</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://www.bleepstatic.com/content/hl-images/2022/07/11/honda-car.jpg?rand=1911685842" alt="Honda-Car" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">HONDA</h2>
                        <p>Checkout used Honda Cars.</p>
                        <div className="card-actions justify-end">
                            <Link to='/hondas'><button className="btn btn-outline text-white banner-title">See Cars</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://wallpaperaccess.com/full/4028171.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">MERCEDES-BENZ</h2>
                        <p>Checkout used Mercedese-Benz Cars.</p>
                        <div className="card-actions justify-end">
                            <Link to='/mercedess'><button className="btn btn-outline text-white banner-title">See Cars</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categories;