import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Leftbar = () => {
  const userData = useSelector((state) => state.userReducer);
  const firstname = userData.firstName;
  const lastname = userData.lastName;
  const names = firstname + " " + lastname;

  return (
    <div className="leftbar">
      <div className="relative">
        <div className="user">
          <div className="userRound">
            {firstname && firstname.substring(0, 1)}
            {lastname && lastname.substring(0, 1)}
          </div>
          <div className="userName">{names}</div>
        </div>

        <NavLink exact={true.toString()} to="/profil">
          <label htmlFor="general">
            <input id="general" type="radio" name="color"></input>
            <div className="iconNav">
              <div className="line"></div>
              <div className="icon">
                <img src="./img/info-card.svg" alt="services" />
              </div>

              <div className="iconName">général</div>
            </div>
          </label>
        </NavLink>
        <NavLink exact={true.toString()} to="/">
          <label htmlFor="test">
            <input id="test" type="radio" name="color"></input>
            <div className="iconNav">
              <div className="line"></div>
              <div className="icon">
                <img src="./img/info-card.svg" alt="services" />
              </div>
              <div className="iconName">test</div>
            </div>
          </label>
        </NavLink>
      </div>
    </div>
  );
};

export default Leftbar;
