import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import BuyerDashboard from '../BuyerDashboard/BuyerDashboard';
import SellerDashboard from '../SellerDashboard/SellerDashboard';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const { data: users = {} } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    if (users[0]?.role === 'admin') {
        return <AdminDashboard></AdminDashboard>

    }
    else {
        if (users[0]?.role === 'seller') {
            return <SellerDashboard></SellerDashboard>

        }
        else {
            return <BuyerDashboard></BuyerDashboard>
        }
    }
};

export default Dashboard;