import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CarModel from '../CarModel/CarModel';

const HondaCars = () => {
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/hondas')
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

export default HondaCars;