import React from "react";
import skilla from "./Skilla.module.css";
import SideBar from "../../components/SideBar/SideBar";
import logo from "../../assets/icon/logo.svg";
import { Link } from "react-router-dom";

const Scilla = () => {
  return (
    <>
      <div className={skilla.section}>
        <div className={skilla.sidebar}>
          <SideBar />
        </div>
        <div className={skilla.container}>
          <div className={skilla.box}>
            <h2>
              Добро пожаловать в{" "}
              <img className={skilla.logo} src={logo} alt="" />
            </h2>
            <Link to="/calls">
              <button className={skilla.btn}>Перейти а раздел 3вонки</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scilla;
