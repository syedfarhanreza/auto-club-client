import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const CarModel = ({ car }) => {
    const { carName, img, currentPrice } = car;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const carName = form.carName.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const booking = {
            name,
            email,
            img,
            currentPrice,
            carName,
            phone,
            address
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    // refetch();
                    // navigate('/Dashboard');
                }
                else {
                    toast.error(data.message);
                }
            })
    }
    return (
        <div className='my-20'>
            <h1 className='text-center text-3xl mt-8'>{carName}</h1>
            <div>

                <label htmlFor="booking-modal" className="btn btn-outline hover:bg-[#ff4605]">Book Now</label>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h1 className='text-center uppercase text-2xl my-4'>Add your info</h1>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>

                            <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" disabled />

                            <input name='email' type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" disabled />

                            <input name='carName' type="text" defaultValue={carName} placeholder="Car Name" className="input input-bordered w-full " disabled />

                            <input name='carPrice' type="text" defaultValue={currentPrice} placeholder='Car Price' className="input input-bordered w-full " disabled />

                            <input name='phone' type="tel" placeholder="Phone Number" className="input input-bordered w-full" required />

                            <input name='address' type="text" placeholder="Meeting Address" className="input input-bordered w-full" required />

                            <input className='btn btn-outline hover:bg-[#ff4605] w-full' type="submit" value="Submit" />

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CarModel;