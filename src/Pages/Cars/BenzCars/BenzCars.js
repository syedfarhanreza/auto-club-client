import { useQuery } from '@tanstack/react-query';
import React from 'react';

const BenzCars = () => {
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/mercedess')
            .then(res => res.json())
    });
    return (
        <div>
            
        </div>
    );
};

export default BenzCars;