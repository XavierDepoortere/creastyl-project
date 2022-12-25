import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import SignIn from "./pages/SignIn";
import { UidContext } from "./components/AppContext";
import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);

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
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/test" exact element={<Test />} />
          <Route path="/signin" exact element={<SignIn />} />
        </Routes>
      </Router>
    </UidContext.Provider>
  );
};

export default App;
