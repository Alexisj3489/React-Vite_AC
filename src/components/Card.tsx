import React from 'react';

const datosAlimentos = [
  {
    id: 1,
    alimento: "Manzanas Rojas",
    estado: "Fresco",
    porcentaje: 98,
    fecha: "Hoy, 10:30 AM",
    imagenUrl: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    alimento: "Plátanos",
    estado: "Maduro",
    porcentaje: 85,
    fecha: "Hoy, 09:15 AM",
    imagenUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    alimento: "Lechuga Romana",
    estado: "Fresco",
    porcentaje: 99,
    fecha: "Ayer, 02:20 PM",
    imagenUrl: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    alimento: "Zanahorias",
    estado: "Fresco",
    porcentaje: 96,
    fecha: "Ayer, 04:30 PM",
    imagenUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    alimento: "Aguacates",
    estado: "Maduro",
    porcentaje: 88,
    fecha: "Ayer, 11:00 AM",
    imagenUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 7,
    alimento: "Queso Fresco",
    estado: "Podrido",
    porcentaje: 91,
    fecha: "Hace 2 días, 06:15 PM",
    imagenUrl: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 8,
    alimento: "Carne de Pollo",
    estado: "Fresco",
    porcentaje: 95,
    fecha: "Hace 1 hora",
    imagenUrl: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 9,
    alimento: "Pescado",
    estado: "Podrido",
    porcentaje: 93,
    fecha: "Hace 3 días",
    imagenUrl: "https://images.unsplash.com/photo-1535025639604-9a804c092faa?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 10,
    alimento: "Arroz Cocido",
    estado: "Maduro",
    porcentaje: 86,
    fecha: "Hoy, 07:00 AM",
    imagenUrl: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=500&q=60"
  },
];

interface CardData {
  id: number;
  alimento: string;
  estado: string;
  porcentaje: number;
  fecha: string;
  imagenUrl: string;
}

function SingleCard({ data }: { data: CardData }) {

  const getColorEstado = (estado: string) => {
    if (estado === 'Fresco') return 'text-success';
    if (estado === 'Maduro') return 'text-warning';
    return 'text-danger';
  };

  const getBadgeColor = (estado: string) => {
    if (estado === 'Fresco') return 'bg-success';
    if (estado === 'Maduro') return 'bg-warning text-dark';
    return 'bg-danger';
  };

  // URL de respaldo por si falla la imagen principal
  const fallbackImage = "https://placehold.co/500x300?text=Imagen+No+Disponible";

  return (
    <div className="card shadow-sm border-0 h-100">
      <div style={{ position: 'relative' }}>
        <img
          src={data.imagenUrl}
          className="card-img-top"
          alt={data.alimento}
          style={{ height: "200px", objectFit: "cover" }}
          // 2. Manejo de error: Si la imagen falla, pone una por defecto
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Previene bucle infinito
            target.src = fallbackImage;
          }}
        />
        <span className={`position-absolute top-0 end-0 badge m-2 ${getBadgeColor(data.estado)}`}>
          IA: {data.porcentaje}%
        </span>
      </div>

      <div className="card-body">
        <h5 className="card-title fw-bold">{data.alimento}</h5>
        <h6 className={`card-subtitle mb-2 fw-bold ${getColorEstado(data.estado)}`}>
          Estado: {data.estado}
        </h6>
        <p className="card-text small text-muted">
          Detección realizada por IA.
        </p>
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-primary btn-sm">Detalles</button>
          <button className="btn btn-outline-secondary btn-sm">Historial</button>
        </div>
      </div>

      <div className="card-footer text-muted text-center small">
        {data.fecha}
      </div>
    </div>
  );
}

function Card() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#eef2f3' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-4 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">🍏 FreshAI Scan</a>
          <span className="navbar-text text-white">
            Panel de Control
          </span>
        </div>
      </nav>

      <div className="container py-4">
        <div className="text-center mb-5">
          <h1 className="display-6 fw-bold text-dark">Resultados de Análisis</h1>
          <p className="lead text-muted">Vista en tiempo real de los sensores</p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {datosAlimentos.map(item => (
            <div className="col" key={item.id}>
              <SingleCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;