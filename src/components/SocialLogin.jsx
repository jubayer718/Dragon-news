import { FaGoogle,FaGithub } from "react-icons/fa";


const SocialLogin = () => {
  return (
    <div className="*:w-full space-y-2">
      <button className='btn'><FaGoogle></FaGoogle> Login with google</button>
      <button className='btn'><FaGithub></FaGithub> Login With github</button>
    </div>
  );
};

export default SocialLogin;