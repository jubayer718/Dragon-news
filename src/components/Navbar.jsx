import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className='logo'></div>
      <div className='flex items-center gap-5'>
 
          <Link>Home</Link>
          <Link>Career</Link>
          <Link>About</Link>
    
      </div>
      <div className="login flex items-center gap-2">
        <div className="img">
          <img src={userIcon} alt="" />
        </div>
        <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;