import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  // console.log(import.meta.env.VITE_a)
  return (
  
      <div className="flex flex-col gap-3 py-3 items-center justify-center ">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-400 font-poppins"> Journalism Without Fear or Favour</h2>
      <p>{ moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
     </div>

  );
};

export default Header;