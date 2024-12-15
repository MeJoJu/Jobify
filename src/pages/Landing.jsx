import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import{Logo} from '../component'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non esse
            porro debitis dignissimos eum, magni perferendis vitae repellat
            excepturi quis eligendi. Ratione fugiat nulla excepturi modi,
            voluptatum dolorum temporibus voluptatibus?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="Job Hunt" className="img main-img" />{" "}
      </div>
    </Wrapper>
  );
};

export default Landing;
