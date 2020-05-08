import React from "react";
import food from "../assets/images/lunchlog.png";
import prof from "../assets/images/prof.png";
const Login = () => {
  return (
    <div class="login">
      <div class="left">
        <h1>PERSOL LUNCH</h1>
        <img class="loginimg" src={food} alt="" />
      </div>

      <div class="right">
        <form class="form">
          <img class="prof" src={prof} alt="" />
          <div class="heading">Login</div>
          <div>
            <p>Username</p>
            <input class="input" type="text" name="name" />
          </div>
          <p>Password</p>
          <input class="input" type="text" name="name" />
          <div>
            <input class="submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
