import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const BuyerDashboard = () => {
    const { user } = useContext(AuthContext);
    const url = `https://auto-club-server.vercel.app/bookings?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: ` bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mb-[500px]'>
            <h3 className="text-3xl text-center">My Orders</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td><img className='w-20' src={booking.img} alt="" /></td>
                                <td>{booking.carName}</td>
                                <td>${booking.currentPrice}</td>
                                <td>
                                    {
                                        booking.currentPrice && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                    <button className='btn btn-info btn-sm'>PAY NOW</button>
                                </Link>
                                    }
                                {
                                    booking.currentPrice && booking.paid && <span className='text-2xl text-green-700 font-bold'>Paid</span>
                                }

                            </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >

    );
};

export default BuyerDashboard;