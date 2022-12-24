import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/test" exact element={<Test />} />
          <Route path="/signin" exact element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
