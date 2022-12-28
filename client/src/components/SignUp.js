import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setControlPassword("");
    setDateOfBirth("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const emailError = document.querySelector(".email.error");
    const lastNameError = document.querySelector(".lastName.error");
    const firstNameError = document.querySelector(".firstName.error");
    const dateOfBirthError = document.querySelector(".dateOfBirth.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );

    passwordConfirmError.innerHTML = "";

    if (password !== controlPassword) {
      passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          firstName,
          lastName,
          email,
          password,
          dateOfBirth,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            emailError.innerHTML = res.data.errors.email;
            lastNameError.innerHTML = res.data.errors.lastName;
            firstNameError.innerHTML = res.data.errors.firstName;
            passwordError.innerHTML = res.data.errors.password;
            dateOfBirthError.innerHTML = res.data.errors.dateOfBirth;
          } else {
            resetForm();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <form action="" onSubmit={handleRegister} id="sign-up-form">
        <label htmlFor="firstName">Prénom</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <div className="firstName error"></div>
        <br />
        <label htmlFor="lastName">Nom</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <div className="lastName error"></div>
        <br />
        <label htmlFor="dateOfBirth">Date de naissance</label>
        <br />
        <input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          onChange={(e) => setDateOfBirth(e.target.value)}
          value={dateOfBirth}
        />
        <div className="dateOfBirth error"></div>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="email error"></div>
        <br />
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="password error"></div>
        <br />
        <label htmlFor="password-conf">Confirmer mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password-conf"
          onChange={(e) => setControlPassword(e.target.value)}
          value={controlPassword}
        />
        <div className="password-confirm error"></div>
        <br />

        <input type="submit" value="Valider inscription" />
      </form>
    </>
  );
};

export default SignUp;
