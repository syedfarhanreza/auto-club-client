import React from 'react';
import { Link } from 'react-router-dom';


const CarModel = ({ car, setCarName }) => {
    console.log(car);
    return (
        <div className="hero w-3/4 border border-lg mx-auto shadow-2xl mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={car.img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold"> {car.carName}</h1>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-content-between gap-4'>
                        <div className="py-6 text-xl w-80">
                            <p>Address : {car.location}</p>
                            <p>Original Price : ${car.price}</p>
                            <p>Current Price : <span className='font-bold'>${car.currentPrice}</span></p>
                        </div>
                        <div className="py-6 text-xl w-80">
                            <p>Used : {car.used}</p>
                            <p>Posted : {car.time}</p>
                            <p>Owner name : <span className='font-bold'>{car.sellerName}</span></p>
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <div>

                            <label
                                htmlFor="booking-modal"
                                className="btn btn-outline hover:bg-[#ff4605]"
                                onClick={() => setCarName(car)}
                            >Book Now</label>
                        </div>

                        <div>
                            <Link to={`/${car.categoryName}s/${car._id}`}> <button className="btn btn-outline hover:bg-[#ff4605] banner-title">More Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
            </div >
    );
};

export default CarModel;