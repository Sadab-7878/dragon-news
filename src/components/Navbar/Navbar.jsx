import React from "react";
import { Link } from "react-router";
import usericon from "../../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/career"}>Career</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <div className="login">
        <div className="flex gap-2 items-center ">
          <div>
            <img src={usericon} alt="usericon" />
          </div>

          <Link to={"/auth/login"} className="btn btn-neutral rounded-none">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
