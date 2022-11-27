import { useQuery } from '@tanstack/react-query';
import React from 'react';

const HondaCars = () => {
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/hondas')
            .then(res => res.json())
    });
    return (
        <div>
            
        </div>
    );
};

export default HondaCars;