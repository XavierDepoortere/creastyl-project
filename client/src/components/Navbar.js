import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Logout";
import Leftbar from "../components/Leftbar";

const Navbar = () => {
  var [radionav, setRadionav] = useState();
  const [radionav2, setRadionav2] = useState();
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const firstname = userData.firstName;
  const lastname = userData.lastName;
  const navAdmin = userData.duty;
  const names = firstname + " " + lastname;

  return (
    <nav>
      {uid ? (
        <div className="topbar">
          <NavLink
            exact={true.toString()}
            to="/"
            onClick={() => [setRadionav(true), setRadionav2(false)]}
            value={radionav}
          >
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
            onClick={() => [setRadionav(false), setRadionav2(true)]}
            value={radionav2}
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
          <Leftbar radionav={radionav} radionav2={radionav2} />
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default Navbar;
