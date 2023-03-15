import { useEffect, useState } from "react";
import { getData } from "../service/pouchdb";

interface TableDataProps {
  db?: any;
}

export const TableData = ({ db }: TableDataProps ) => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    getData(db).then((data) => {
      console.log({ data });
      setData(data as any);
    });
  }, [db]);

  return (
    <>
      <h1>TableData</h1>
      <table>
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dirección</th>
            <th>Nivel</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.last_name}</td>
              <td>{item.address}</td>
              <td>{item.level}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </>
  );
}

