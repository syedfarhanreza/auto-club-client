import React from 'react';

const Register = () => {
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
            <h2 className='text-xl'>Login</h2>
            <form onSubmit={handleSubmit(handlRegister)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="text" {...register("email")}  className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs mb-4">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type="password" {...register("password")}  className="input input-bordered w-full max-w-xs" required />
                </div>
                <input className='btn btn-primary w-full' value="login" type="submit" />
            </form>
            <p>Don't have an account? <Link className='text-blue-600' to="/register">Create new account</Link></p>
            <div className='divider'>---------Or Login With---------</div>
            <button className='btn bg-green-600 w-full text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;