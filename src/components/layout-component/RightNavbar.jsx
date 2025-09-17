import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import FindUs from "../FindUs/FindUs";

const RightNavbar = () => {
  return (
    <div className="space-y-5">
      <SocialLogin />
      <FindUs />
    </div>
  );
};

export default RightNavbar;
