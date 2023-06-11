import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../api/api";

const Table = () => {
  const dispatch = useDispatch();
  const db = useSelector((state) => state.db.data);
  console.log(db);

  useEffect(() => {
    dispatch(postData());
  }, []);

  return (
    <>
      {db.map((item) => (
        <table>
          <thead>
            <tr>
              <th>Тип</th>
              <th>Время</th>
              <th>Сотрудник</th>
              <th>Звонок</th>
              <th>Источник</th>
              <th>Оценка</th>
              <th>Длителность</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.in_out}</td>
              <td>{item.date}</td>
              <td>{item.person_name}</td>
              <td>{item.from_number}</td>
              <td>{item.source}</td>
              <td>{item.status}</td>
              <td>{item.time}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};

export default Table;
