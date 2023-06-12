import React, { useState } from "react";
import filter from "./Filter.module.css";

import { useDispatch, useSelector } from "react-redux";
import { filterDate } from "../../api/filter";

const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const dispatch = useDispatch();
  const fDate = useSelector((state) => state.date.data);
  console.log(fDate);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    dispatch(filterDate(inputValue));
  };

  return (
    <>
      <div className={filter.section}>
        <div className={filter.container}>
          <h2>filter block</h2>
          <form className={filter.box} onSubmit={HandleSubmit}>
            <input
              type="text"
              value={inputValue}
              name=""
              id=""
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button>Фильтр</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
