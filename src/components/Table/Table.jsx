import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../api/api";
import table from "./Table.module.css";

const Table = () => {
  const dispatch = useDispatch();
  const db = useSelector((state) => state.db.data);
  console.log(db);

  useEffect(() => {
    dispatch(postData());
  }, []);

  return (
    <>
      <table className={table.table}>
        <thead>
          <tr className={table.list}>
            <th className={table.itemH}>Тип</th>
            <th className={table.itemH}>Время</th>
            <th className={table.itemH}>Сотрудник</th>
            <th className={table.itemH}>Звонок</th>
            <th className={table.itemH}>Источник</th>
            <th className={table.itemH}>Оценка</th>
            <th className={table.itemH}>Длителность</th>
          </tr>
        </thead>
        <tbody>
          {db.map((item) => (
            <tr key={item.id} className={table.list}>
              {/* <div className={table.listT}> */}
              <td className={table.item}>{item.in_out}</td>
              <td className={table.item}>{item.date}</td>
              <td className={table.item}>
                <img className={table.avatar} src={item.person_avatar} alt="" />
              </td>
              <td className={table.item}>{item.from_number}</td>
              <td className={table.item}>{item.source}</td>
              <td className={table.item}>{item.status}</td>
              <td className={table.item}>{item.time} мин</td>
              {/* </div> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
