import React from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Test from "../../pages/Test";

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact element={Home} />
        <Route path="/test" exact element={Test} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </BrowserRouter>
    </>
  );
};

export default index;
