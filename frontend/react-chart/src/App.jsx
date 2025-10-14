import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmpleadosTable from './components/EmpleadosTable'
import useEmpleados from './hooks/useEmpleados'
import EmpleadosChart from './components/EmpleadosChart'
function App() {
 const { data, loading, error } = useEmpleados();
  return (
    
    <>
     <EmpleadosChart data={data} />
     <EmpleadosTable data={data} />
    </>
  )
}

export default App
