import React from "react";
import food from "../assets/images/lunchlog.png";
import prof from "../assets/images/prof.png";
const Login = () => {
  return (
    <div class="login">
      <div class="left">
        <div>
          <div>
            <h1 class="logo">PERSOL LUNCH</h1>
          </div>
          <p class="info">
            Tag line
            <br /> goes here!
          </p>
        </div>
      </div>

      <div class="right">
        <form class="form">
          <div class="heading">Login</div>
          <div>
            <p class="label">USERNAME</p>
            <input class="input" type="text" name="username" />
          </div>
          <p class="label">PASSWORD</p>
          <input class="input" type="password" name="password" />
          <br />
          <input
            type="checkbox"
            id="savepassword"
            name="savepassword"
            value="yes"
          />
          <label class="checkbox-label" for="savepassword">
            Remember me?
          </label>
          <div>
            <input class="submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
