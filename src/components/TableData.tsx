import { useEffect, useState } from "react";
import { getData } from "../service/pouchdb";
import '../style/TableData.css'

interface TableDataProps {
  db: PouchDB.Database;
  recharge: boolean;
  setRecharge: (recharge: boolean) => void;
}

export const TableData = ({ db, recharge, setRecharge }: TableDataProps) => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    if (recharge) {
      setLoading(true);
      setTimeout(() => {
        getData(db).then((data) => {
          setData(data as any);
        });
        setLoading(false);
        setRecharge(false);
      }, 1400);
    }
  });

  return (
    <div className="table">
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
          {!loading && data?.map((item: any) => (
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

          {loading && (
            <tr>
              <td colSpan={7}>
                <div className="spinner">
                  <div className="spinner1"></div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
}

