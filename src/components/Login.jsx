import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then(result => {
        const user = result.user
        setUser(user);
    }) .catch((error) => {
    
   alert(error.code)
  });

    
  }
  return (
    <div className="bg-[#F3F3F3]">
     <div className="w-11/12 mx-auto py-5">
          <Navbar></Navbar>
    </div>
       <div className='min-h-screen flex items-center justify-center font-poppins'>
      
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none  p-10">
        <h3 className='font-bold text-2xl text-center'>Login your account</h3>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="border-none rounded-none bg-gray-100  input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="border-none rounded-none bg-gray-100  input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
        </form>
        <h3 className='text-center font-semibold'>Don't have an account? <Link to="/auth/register"  className='text-red-500'>Register</Link></h3>
    </div>
    </div>
   </div>
  );
};

export default Login;