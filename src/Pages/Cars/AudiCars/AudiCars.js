import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import CarModel from '../CarModel/CarModel';

const AudiCars = () => {
    const [nameOfCar, setCarName] = useState(null);
    console.log(nameOfCar);
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/audis')
            .then(res => res.json())
    });
    return (
        <div>
            <div>

                {
                    cars.map(car => <CarModel
                        key={car._id}
                        car={car}
                        setCarName={setCarName}
                    ></CarModel>)
                }
            </div>
            {
                nameOfCar && <BookingModal
                    nameOfCar={nameOfCar}>
                </BookingModal>
            }
        </div>
    );
};

export default AudiCars;