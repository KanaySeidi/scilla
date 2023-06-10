import React from "react";
import head from "./Header.module.css";
import search from "../../assets/icon/search.svg";
import arrow_down from "../../assets/icon/arrow_down.svg";
import avatar from "../../assets/icon/avatar.svg";

const Header = () => {
  return (
    <>
      <div className={head.container}>
        <p className={head.date}>Среда, 13 окт</p>
        <div className={head.list}>
          <div className={head.item}>
            <div>
              Новые звонки <span className={head.green}>20 из 30 шт</span>
            </div>
            <div className={head.gfield}>
              <div className={head.one}></div>
            </div>
          </div>
          <div className={head.item}>
            <div>
              Качество разговоров <span className={head.yellow}>40%</span>
            </div>
            <div className={head.yfield}>
              <div className={head.two}></div>
            </div>
          </div>
          <div className={head.item}>
            <div>
              Конверсия в заказ <span className={head.red}>67%</span>
            </div>
            <div className={head.rfield}>
              <div className={head.three}></div>
            </div>
          </div>
        </div>
        <div className={head.search}>
          <img src={search} alt="" />
          <p className={head.user}>ИП Сидарова Александра Михайловна</p>
          <img src="" alt="" />
        </div>
        <div className={head.user}>
          <img src={avatar} alt="" />
          <img src={arrow_down} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
