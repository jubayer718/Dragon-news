import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const Register = () => {
  const { createNewUser, setUser,updateUser } = useContext(AuthContext)
  const [error,setError]=useState({})
const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    const name = form.get("name")
    if (name.length < 5) {
      setError({ ...error, name: "name must be 5 character" })
      return;
    }
    const email=form.get("email")
    const password=form.get("password")
    const photo=form.get("photo")
    createNewUser(email, password)
      .then(result => {
        const user = result.user
        setUser(user)
        updateUser({ displayName: name, photoURL: photo })
          .then((result) => {
          navigate("/")
          }).catch(error => {
          console.log(error)
        })
       
    }) .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  console.log(errorCode,errorMessage)
  });
}
  return (
    <div className="bg-[#F3F3F3] font-poppins" >
      <div className="w-11/12 mx-auto py-5">
          <Navbar></Navbar>
    </div>
      <div className='min-h-screen flex items-center justify-center '>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none  p-8">
        <h3 className='font-bold text-2xl text-center'>Register your account</h3>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
              <input type="text" name="name" placeholder="Your Name" className="border-none rounded-none bg-gray-100  input input-bordered" required />
              {
                error.name&&  <label className="label text-xs text-red-600">
          {error.name}
          </label>
              }
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="border-none rounded-none bg-gray-100  input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="border-none rounded-none bg-gray-100  input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className=" border-none rounded-none bg-gray-100 input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
        </form>
        <h3 className='text-center font-semibold'><Link to="/auth/login"  className='text-red-500'>Login</Link></h3>
    </div>
    </div>
   </div>
  );
};

export default Register;