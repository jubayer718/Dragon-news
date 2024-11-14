import logo from "../assets/logo.png";

const Header = () => {
  return (
  
      <div className="flex flex-col gap-3 py-3 items-center justify-center ">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-400"> Journalism Without Fear or Favour</h2>
     </div>

  );
};

export default Header;