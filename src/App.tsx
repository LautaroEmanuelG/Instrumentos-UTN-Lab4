
// src/App.tsx
import './App.css';
import './style.css';
import instrumentos from './assets/instrumentos.json';
import InstrumentoCard from './components/InstrumentoCard';

function App() {
  return (
    <div className="container">
      <h1>Instrumentos Musicales</h1>
      <div className="grid">
        {instrumentos.instrumentos.map((item) => (
          <InstrumentoCard key={item.id} instrumento={item} />
        ))}
      </div>
    </div>
  );
}

export default App;