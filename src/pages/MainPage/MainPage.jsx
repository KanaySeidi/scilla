import React from "react";
import main from "./MainPage.module.css";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";

import Table from "../../components/Table/Table";
import Filter from "../../components/Filter/Filter";

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

          <div className={main.filter}>
            <Filter />
          </div>
          <div className={main.table}>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
