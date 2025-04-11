// src/App.tsx
import './App.css';
import './style.css';
// import instrumentos from './assets/instrumentos.json';
import InstrumentoCard from './components/InstrumentoCard';
import { useEffect, useState } from 'react';

interface Instrumento {
  id: string;
  instrumento: string;
  marca: string;
  modelo: string;
  imagen: string;
  precio: string;
  costoEnvio: string;
  cantidadVendida: string;
  descripcion: string;
}

const getInstrumentos = async () => {
  const response = await fetch('http://localhost:8080/api/instrumentos');
  const data = await response.json();
  console.log(data);
  return data;
};

function App() {
  
  const [instrumentosData, setInstrumentosData] = useState<Instrumento[]>([]);

  useEffect(() => {
    getInstrumentos().then(data => setInstrumentosData(data));
  }, []);

  return (
    <div className="container">
      <h1>Instrumentos Musicales</h1>
      <div className="grid">
        {instrumentosData.map(item => (
          <InstrumentoCard
            key={item.id}
            instrumento={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
