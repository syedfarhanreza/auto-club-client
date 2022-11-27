import React from 'react';


const CarModel = ({ car,setCarName }) => {
   const {carName} = car;
   console.log(car);
    return (
        <div className='my-20'>
            <h1 className='text-center text-3xl mt-8'>{carName}</h1>
            <div>

                <label htmlFor="booking-modal"
                 className="btn btn-outline hover:bg-[#ff4605]"
                 onClick={() => setCarName(car)}
                 >Book Now</label>
            </div>
        </div>
    );
};

export default CarModel;