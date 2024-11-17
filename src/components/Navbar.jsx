import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
// console.log(user)
  return (
    <div className="flex items-center justify-between">
      <div className='logo'> {user && user.email}</div>
      <div className='flex items-center gap-5'>
 
          <Link to="/">Home</Link>
          <Link to="/career">Career</Link>
          <Link to="about">About</Link>
          <Link to="/dev">Dev info</Link>
    
      </div>
      <div className="login flex items-center gap-2">
        <div className="img">
          {user && user?.email ? (<div><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
            <p className="text-[10px]">{ user.displayName}</p>
          </div> ): (<img src={userIcon} alt="" />)}

        </div>
        {
          user&& user?.email?<button onClick={logOut} className="btn btn-neutral rounded-none">Log OUt</button>:<Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;