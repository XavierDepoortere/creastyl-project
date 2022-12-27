import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";

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
                <img src="./img/house.svg" />
              </div>
              <div className="iconName">Accueil</div>
            </div>
          </NavLink>

          <div className="user">
            <div className="userRound"></div>
            <div className="userName">name user</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default Navbar;
