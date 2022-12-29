import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const firstname = userData.firstName;
  const lastname = userData.lastName;
  const navAdmin = userData.duty;
  const names = firstname + " " + lastname;

  return (
    <nav>
      <div></div>
      {uid ? (
        <div className="topbar">
          <NavLink exact={true.toString()} to="/">
            <div className="iconNav">
              <div className="icon">
                <img src="./img/house.svg" alt="acceuil" />
              </div>
              <div className="iconName">accueil</div>
            </div>
          </NavLink>

          <NavLink
            id="admin"
            aria-expanded={navAdmin}
            exact={true.toString()}
            to="/setting"
          >
            <div className="iconNav">
              <div className="icon">
                <img src="./img/setting.svg" alt="services" />
              </div>
              <div className="iconName">services</div>
            </div>
          </NavLink>

          <div className="user">
            <div className="userRound">
              {firstname && firstname.substring(0, 1)}
              {lastname && lastname.substring(0, 1)}
            </div>
            <div className="userName">{names}</div>
          </div>
          <div className="iconNav">
            <div className="icon">
              <Logout />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default Navbar;
