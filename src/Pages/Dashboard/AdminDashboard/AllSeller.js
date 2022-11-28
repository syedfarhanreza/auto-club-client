import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user?role=seller');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='border my-20 w-3/4 mx-auto'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyers.map((user, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.role}</td>
                            <td><button className='btn btn-outline'>Delete</button></td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;