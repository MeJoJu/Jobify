import React from "react";
import { Link } from "react-router-dom";
import { FormRow, Logo } from "../component/";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="text" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          not a member yet?
          <Link to="/register" className="member-btn">
            register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
