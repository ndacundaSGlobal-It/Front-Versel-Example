import { useState } from 'react'

function App() {
  const [registro, setRegistro] = useState(null)

  const obtenerInventario = async () => {
    const res = await fetch('https://TU_BACKEND_URL/inventario/primero')
    const data = await res.json()
    setRegistro(data)
  }

  return (
    <div>
      <h1>Consulta de Inventario</h1>
      <button onClick={obtenerInventario}>Traer primer registro</button>
      {registro && (
        <pre>{JSON.stringify(registro, null, 2)}</pre>
      )}
    </div>
  )
}

export default App