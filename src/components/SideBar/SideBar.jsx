import React from "react";
import side from "./SideBar.module.css";
import logo from "../../assets/icon/logo.svg";
import total from "../../assets/icon/itog.svg";
import plus from "../../assets/icon/plus.svg";
import alert from "../../assets/icon/alert.svg";
import outline from "../../assets/icon/outline.svg";
import briefcase from "../../assets/icon/briefcase.png";
import calls from "../../assets/icon/calls.png";
import db from "../../assets/icon/db.png";
import documents from "../../assets/icon/documents.png";
import orders from "../../assets/icon/orders.png";
import people from "../../assets/icon/people.png";
import performers from "../../assets/icon/performers.png";
import setting from "../../assets/icon/settings.png";

const SideBar = () => {
  return (
    <>
      <div className={side.container}>
        <img className={side.logo} src={logo} alt="Scilla logo" />
        <ul>
          <li>
            <div className={side.leftBorder}></div>
            <img src={total} alt="" />
            <p>Итоги</p>
          </li>
          <li>
            <div className={side.leftBorder}></div>

            <img src={orders} alt="" />
            <p>Заказы</p>
          </li>
          <li>
            <div className={side.leftBorder}></div>

            <img src={outline} alt="" />
            <p>Сообщение</p>
          </li>
          <li>
            <div className={side.leftBorder}></div>

            <img src={calls} alt="" />
            <p>Звонки</p>
          </li>
          <li>
            <div className={side.leftBorder}></div>

            <img src={people} alt="" />
            <p>Контрагенты</p>
          </li>
          <li>
            <div className={side.leftBorder}></div>

            <img src={documents} alt="" />
            <p>Документы</p>
          </li>
          <li>
            <div className={side.leftBorder}></div>

            <img src={performers} alt="" />
            <p>Исполнители</p>
          </li>
          <li>
            <div className={side.leftBorder}></div>

            <img src={briefcase} alt="" />
            <p>Отчеты</p>
          </li>
          <li>
            <div className={side.leftBorder}></div>

            <img src={db} alt="" />
            <p>База знаний</p>
          </li>
          <li>
            <div className={side.leftBorder}></div>

            <img src={setting} alt="" />
            <p>Настройки</p>
          </li>
        </ul>
        <div className={side.order}>
          <button>
            Добавить Заказ
            <img src={plus} alt="" />
          </button>
          <button>
            Оплата
            <img src={alert} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
