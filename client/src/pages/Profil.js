import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const userData = useSelector((state) => state.userReducer);
  const firstname = userData.firstName;
  const lastname = userData.lastName;
  const email = userData.email;

  return (
    <div className="profil">
      <div className="profilContent">
        <div className="cardContent">
          <div className="boxCard infoHr">mes infos RH</div>
          <div className="boxCard lastName">
            nom
            <div className="demiBox">
              <span>{lastname}</span>
            </div>
          </div>
          <div className="boxCard firstName">
            prénom
            <div className="demiBox">
              <span>{firstname}</span>
            </div>
          </div>
          <div className="boxCard position">
            intitulé du poste<div className="demiBox">test</div>
          </div>
          <div className="boxCard lineFixe">
            ligne directe<div className="demiBox">test</div>
          </div>
          <div className="boxCard cellPhone">
            portable<div className="demiBox">test</div>
          </div>
          <div className="boxCard email">
            email<div className="demiBox">{email}</div>
          </div>
          <div className="boxCard manager">
            manager<div className="demiBox">test</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
