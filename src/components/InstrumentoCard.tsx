type Instrumento = {
  id: string;
  instrumento: string;
  marca: string;
  modelo: string;
  imagen: string;
  precio: string;
  costoEnvio: string;
  cantidadVendida: string;
  descripcion: string;
};

const InstrumentoCard = ({ instrumento }: { instrumento: Instrumento }) => {
  return (
    <div className="item-container">
      <img
        src={`/img/${instrumento.imagen}`}
        alt={instrumento.instrumento}
        className="item-image"
      />
      <div className="item-info">
        <h2 className="item-title">{instrumento.instrumento}</h2>
        <p className="item-price">
          $ {parseFloat(instrumento.precio).toLocaleString()}
        </p>

        {instrumento.costoEnvio === 'G' ? (
          <div className="item-envio gratis"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-truck"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg>Envío gratis a todo el país</div>
        ) : (
          <p className="item-envio precio">
            Costo de Envío Interior de Argentina: ${instrumento.costoEnvio}
          </p>
        )}

        <p className="item-vendidos">{instrumento.cantidadVendida} vendidos</p>
      </div>
    </div>
  );
};

export default InstrumentoCard;
