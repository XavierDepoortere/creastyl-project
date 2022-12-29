import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Setting from "./pages/Setting";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import { UidContext } from "./components/AppContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log("No token"));
    };
    fetchToken();
    if (uid) dispatch(getUser(uid));
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Router>
        <Navbar />
        <Leftbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profil" exact element={<Profil />} />
          <Route path="/setting" exact element={<Setting />} />
        </Routes>
      </Router>
    </UidContext.Provider>
  );
};

export default App;
