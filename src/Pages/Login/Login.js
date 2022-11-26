import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register,formState: {errors}, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
   
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.error(error);
            setLoginError(error.message);
        })
    }

    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2x'>
            <h2 className='text-2xl text-center font-bold'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="text" 
                        {...register("email", {
                            required: "Email Address is required"
                        })} 
                         className="input input-bordered w-full max-w-xs" />
                          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs mb-4">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type="password" 
                    {...register("password", {
                        required: "Password is required",
                        minLength: {value: 6, message: 'Password must be 6 characters or longer'}
                        })} 
                         className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} 
                </div>
                <input className='btn btn-primary w-full' value="login" type="submit" />
                <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </div>
            </form>
            <p>Don't have an account? <Link className='text-blue-600' to="/register">Create new account</Link></p>
            <div className='divider'>Or Login With</div>
            <button className='btn bg-green-600 w-full text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;