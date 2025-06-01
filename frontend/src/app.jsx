import React, { useEffect, useState } from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL; // ✅ Ahora la URL es dinámica

function App() {
    const [repuesto, setRepuesto] = useState(null);

    useEffect(() => {
        fetch(`${BACKEND_URL}/repuesto`)  // ✅ Usa la variable de entorno
            .then(response => response.json())
            .then(data => setRepuesto(data.repuesto))
            .catch(error => console.error("Error:", error));
    }, []);

    return (
        <div>
            <h1>Primer Repuesto</h1>
            {repuesto ? (
                <pre>{JSON.stringify(repuesto, null, 2)}</pre>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export default App;
