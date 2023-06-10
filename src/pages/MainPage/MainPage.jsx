import React from "react";
import main from "./MainPage.module.css";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";

const MainPage = () => {
  return (
    <div>
      <div className={main.section}>
        <div className={main.sidebar}>
          <SideBar />
        </div>

        <div className={main.container}>
          <div className={main.header}>
            <Header />
          </div>
          <h2 className={main.text}>Main JS</h2>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
