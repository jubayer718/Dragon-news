import { FaGoogle,FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex *:bg-base-100 join-vertical">
  <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
  <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
</div>

    </div>
  );
};

export default FindUs;