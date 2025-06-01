import React, { useEffect, useState } from "react";

function App() {
    const [repuesto, setRepuesto] = useState(null);

    useEffect(() => {
        fetch("https://mi-backend-xxxxx-run.app/repuesto") // URL de Cloud Run
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