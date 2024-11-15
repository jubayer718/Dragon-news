import SocialLogin from "./SocialLogin";


const RightNav = () => {
  return (
    <div>
      <h2 className="font-semibold"> Login with</h2>
      <div className="pt-5">
        <SocialLogin></SocialLogin>
    </div>
    </div>
  );
};

export default RightNav;