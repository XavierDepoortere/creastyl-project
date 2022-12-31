import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Home from "../pages/Home";

const Leftbar = (props) => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const firstname = userData.firstName;
  const lastname = userData.lastName;
  const names = firstname + " " + lastname;
  console.log(props.radionav);
  return (
    <nav>
      {uid ? (
        <div>
          <div className="leftbar">
            <div className="relative">
              <div className="user">
                <div className="userRound">
                  {firstname && firstname.substring(0, 1)}
                  {lastname && lastname.substring(0, 1)}
                </div>
                <div className="userName">{names}</div>
              </div>

              <div
                className="leftNavigation"
                id="navHome"
                aria-expanded={props.radionav}
              >
                <ul>
                  <li>
                    <NavLink
                      exact="true"
                      to="/"
                      className={(props) =>
                        props.isActive ? "navActive , iconNav" : "iconNav"
                      }
                    >
                      <div className="line"></div>

                      <div className="icon">
                        <img src="./img/info-card.svg" alt="services" />
                      </div>
                      <span>général</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact="true"
                      to="/setting"
                      className={(props) =>
                        props.isActive ? "navActive , iconNav" : "iconNav"
                      }
                    >
                      <div className="line"></div>
                      <div className="icon">
                        <img src="./img/info-card.svg" alt="services" />
                      </div>
                      <span>test</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </nav>
  );
};

export default Leftbar;
