import { useState } from "react"
import { TableData } from "./components/TableData"
import { FormData } from "./components/FormData"
import { syncData } from "./service/pouchdb";
import './style/App.css'
import { db } from "./service/pouchdb";
import { AiOutlineCloudSync } from 'react-icons/ai';

function App() {
  const [ isOpen, setIsOpen ] = useState( false );
  const [ recharge, setRecharge ] = useState(true);

  const handleSync = () => {
    syncData(db);
  }

  return (
    <>
      <div className="container">
        <div className="tabs">
          <button onClick={() => setIsOpen(true)}>Registrar</button>
        </div>
        <div className="sync">
          <button onClick={handleSync}><AiOutlineCloudSync className="icon-sync"/></button>
        </div>
        <div className="body">
          <TableData db={ db } setRecharge={ setRecharge } recharge={ recharge } />
          { isOpen &&  <FormData db={ db } setIsOpen={ setIsOpen } setRecharge={ setRecharge } /> }
        </div>
      </div>
    </>
  )
}

export default App
