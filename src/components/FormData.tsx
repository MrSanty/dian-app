import { useEffect, useState } from "react";
import { addData, getData } from "../service/pouchdb";

interface FormDataProps {
  db?: any;
}

export const FormData = ({ db }: FormDataProps ) => {
  const [ data, setData ] = useState({
    id: '',
    name: '',
    last_name: '',
    address: '',
    level: '',
    phone: '',
    email: '',
  });  

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addData(db, data);
  }

  return (
    <>
      <h1>FormData</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Cedula" value={data.id} onChange={(e) => setData({...data, id: e.target.value})} />
        <input type="text" placeholder="Nombre" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        <input type="text" placeholder="Apellido" value={data.last_name} onChange={(e) => setData({...data, last_name: e.target.value})} />
        <input type="text" placeholder="Dirección" value={data.address} onChange={(e) => setData({...data, address: e.target.value})} />
        <input type="number" placeholder="Nivel" value={data.level} onChange={(e) => setData({...data, level: e.target.value})} />
        <input type="text" placeholder="Teléfono" value={data.phone} onChange={(e) => setData({...data, phone: e.target.value})} />
        <input type="text" placeholder="Correo" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <button type="submit">Guardar</button>
      </form>

    </>
  )
}