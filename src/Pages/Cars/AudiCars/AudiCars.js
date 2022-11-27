import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AudiCars = () => {
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/audis')
            .then(res => res.json())
    });
    return (
        <div>
            {cars.length}
        </div>
    );
};

export default AudiCars;