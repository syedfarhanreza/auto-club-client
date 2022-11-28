import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import CarModel from '../CarModel/CarModel';

const BenzCars = () => {
    const {user} = useContext(AuthContext);
    const [nameOfCar, setCarName] = useState(null);
    console.log(nameOfCar);
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('https://auto-club-server.vercel.app/mercedess')
            .then(res => res.json())
    });
    const { data: users = {} } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://auto-club-server.vercel.app/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    const role = users[0]?.role;
    return (
        <div>
            <div>

                {
                    cars.map(car => <CarModel
                        key={car._id}
                        car={car}
                        setCarName={setCarName}
                        users = {role}
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

export default BenzCars;