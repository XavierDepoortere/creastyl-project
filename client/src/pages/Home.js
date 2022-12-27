import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import SignIn from "../components/SignIn";
const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div>
      <div></div>
      {uid ? (
        <div className="home">
          <div className="homeContent">bienvenue sur Home</div>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Home;
