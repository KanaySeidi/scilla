import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Skilla from "../pages/Skilla/Skilla";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Skilla />} />
        <Route path="/calls" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
