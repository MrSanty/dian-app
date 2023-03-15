import { useState } from "react"
import { TableData } from "./components/TableData"
import { FormData } from "./components/FormData"
import { syncData } from "./service/pouchdb";
import './style/App.css'
import { db } from "./service/pouchdb";

function App() {
  const [ tab, setTab ] = useState('table');

  const handleSync = () => {
    syncData(db);
  }

  return (
    <>
      <div className="container">
        <div className="tabs">
          <button onClick={() => setTab('table')} className={tab === 'table' ? 'active' : ''}>Ver registros</button>
          <button onClick={() => setTab('form')} className={tab === 'form' ? 'active' : ''}>Registrar</button>
        </div>
        <div className="sync">
          <button onClick={handleSync}>Sincronizar</button>
        </div>
        <div className="body">
          {tab === 'table' ? <TableData db={ db } /> : <FormData db={ db } />}
        </div>
      </div>
    </>
  )
}

export default App
