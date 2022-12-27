import React, { useContext, useState } from "react";
import { UidContext } from "./AppContext";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const uid = useContext(UidContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;

          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signIn">
      <div className="signInContent">
        {uid ? (
          <h1>UPDATE PAGE</h1>
        ) : (
          <div className="logContent">
            <div className="formContent">
              <form action="" onSubmit={handleLogin} id="sign-up-form">
                <label htmlFor="email">Email</label>
                <br />
                <div class="email-input">
                  <i class="fas fa-user"></i>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="errorContent">
                  <div className="email error"></div>
                </div>
                <br />
                <label htmlFor="password">Mot de passe</label>
                <br />
                <div class="password-input">
                  <i class="fas fa-lock"></i>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="errorContent">
                  <div className="password error"></div>
                </div>
                <br />
                <input type="submit" value="Connexion" className="btn" />
              </form>
            </div>
            <div className="imgContent">
              <img src="../../img/log.png" alt="xavier depoortere" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;