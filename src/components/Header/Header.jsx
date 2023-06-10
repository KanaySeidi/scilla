import React from "react";
import head from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={head.contianer}>
        <h2 className={head.text}>Header</h2>
      </div>
    </>
  );
};

export default Header;
