import { useState } from "react";
import { addData } from "../service/pouchdb";
import { RiCloseLine } from "react-icons/ri";
import '../style/FormData.css';

interface FormDataProps {
  db: PouchDB.Database;
  setIsOpen: (isOpen: boolean) => void;
  setRecharge: (recharge: boolean) => void;
}

export const FormData = ({ db, setIsOpen, setRecharge }: FormDataProps) => {
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
    setRecharge(true);
    setIsOpen(false);
  }

  const closeModal = () => {
    setRecharge(false);
    setIsOpen(false);
  }
  return (
    <>
      <div className="darkBG" />
      <div className="modal">

        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">Agregar</h5>
            </div>
            <button className="closeBtn" onClick={closeModal}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className="modalContent">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Cedula" value={data.id} onChange={(e) => setData({ ...data, id: e.target.value })} />
                <input type="text" placeholder="Nombre" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <input type="text" placeholder="Apellido" value={data.last_name} onChange={(e) => setData({ ...data, last_name: e.target.value })} />
                <input type="text" placeholder="Dirección" value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />
                <input type="number" placeholder="Nivel" value={data.level} onChange={(e) => setData({ ...data, level: e.target.value })} />
                <input type="text" placeholder="Teléfono" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
                <input type="text" placeholder="Correo" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <button type="submit">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}