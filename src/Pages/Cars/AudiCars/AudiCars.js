import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CarModel from '../CarModel/CarModel';

const AudiCars = () => {
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/audis')
            .then(res => res.json())
    });
    return (
        <div>
           
           {
            cars.map(car => <CarModel
                key={car._id}
                car={car}
                ></CarModel>)
           }
        </div>
    );
};

export default AudiCars;