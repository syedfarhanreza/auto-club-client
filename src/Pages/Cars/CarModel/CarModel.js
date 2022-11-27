import React from 'react';

const CarModel = ({car}) => {
    const {carName} = car;
    return (
        <div>
            <h1>{carName}</h1>
        </div>
    );
};

export default CarModel;