import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Logout";

const Navbar = () => {
  const uid = useContext(UidContext);

  return (
    <nav>
      <div></div>
      {uid ? (
        <div className="topbar">
          <NavLink exact to="/">
            <div className="iconNav">
              <div className="icon">
                <img src="./img/house.svg" alt="house" />
              </div>
              <div className="iconName">Accueil</div>
            </div>
          </NavLink>

          <div className="user">
            <div className="userRound"></div>
            <div className="userName">name user</div>
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
