import React, { useState } from 'react';


const datosAlimentos = [
  {
    id: 1,
    alimento: "Manzanas Rojas",
    estado: "Fresco",
    porcentaje: 98,
    fecha: "Hoy, 10:30 AM",
    imagenUrl: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=500&q=60",
    infoNutricional: {
      calorias: "52 kcal",
      proteinas: "0.3 g",
      carbos: "14 g",
      grasas: "0.2 g",
      beneficio: "Alto contenido en fibra y vitamina C. Ayuda a la salud del corazón."
    }
  },
  {
    id: 2,
    alimento: "Plátanos",
    estado: "Maduro",
    porcentaje: 85,
    fecha: "Hoy, 09:15 AM",
    imagenUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=60",
    infoNutricional: {
      calorias: "89 kcal",
      proteinas: "1.1 g",
      carbos: "23 g",
      grasas: "0.3 g",
      beneficio: "Excelente fuente de potasio y energía rápida."
    }
  },
  {
    id: 3,
    alimento: "Lechuga Romana",
    estado: "Fresco",
    porcentaje: 99,
    fecha: "Ayer, 02:20 PM",
    imagenUrl: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=500&q=60",
    infoNutricional: {
      calorias: "17 kcal",
      proteinas: "1.2 g",
      carbos: "3.3 g",
      grasas: "0.3 g",
      beneficio: "Baja en calorías, alta en agua y vitamina K."
    }
  },
  {
    id: 4,
    alimento: "Zanahorias",
    estado: "Fresco",
    porcentaje: 96,
    fecha: "Ayer, 04:30 PM",
    imagenUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=60",
    infoNutricional: {
      calorias: "41 kcal",
      proteinas: "0.9 g",
      carbos: "10 g",
      grasas: "0.2 g",
      beneficio: "Rica en betacaroteno, excelente para la vista."
    }
  },
  {
    id: 6,
    alimento: "Aguacates",
    estado: "Maduro",
    porcentaje: 88,
    fecha: "Ayer, 11:00 AM",
    imagenUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=500&q=60",
    infoNutricional: {
      calorias: "160 kcal",
      proteinas: "2 g",
      carbos: "9 g",
      grasas: "15 g",
      beneficio: "Grasas saludables (Omega 3) y potasio."
    }
  },
  {
    id: 7,
    alimento: "Queso Fresco",
    estado: "Podrido",
    porcentaje: 91,
    fecha: "Hace 2 días, 06:15 PM",
    imagenUrl: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=60",
    infoNutricional: {
      calorias: "299 kcal",
      proteinas: "22 g",
      carbos: "4 g",
      grasas: "22 g",
      beneficio: "NO CONSUMIR. Riesgo bacteriano alto."
    }
  },
  {
    id: 8,
    alimento: "Carne de Pollo",
    estado: "Fresco",
    porcentaje: 95,
    fecha: "Hace 1 hora",
    imagenUrl: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=60",
    infoNutricional: {
      calorias: "165 kcal",
      proteinas: "31 g",
      carbos: "0 g",
      grasas: "3.6 g",
      beneficio: "Alta fuente de proteína magra para reparación muscular."
    }
  },
  {
    id: 9,
    alimento: "Pescado",
    estado: "Podrido",
    porcentaje: 93,
    fecha: "Hace 3 días",
    imagenUrl: "https://images.unsplash.com/photo-1535025639604-9a804c092faa?auto=format&fit=crop&w=500&q=60",
    infoNutricional: {
      calorias: "206 kcal",
      proteinas: "22 g",
      carbos: "0 g",
      grasas: "12 g",
      beneficio: "NO CONSUMIR. Descarte inmediato."
    }
  },
  {
    id: 10,
    alimento: "Arroz Cocido",
    estado: "Maduro", 
    porcentaje: 86,
    fecha: "Hoy, 07:00 AM",
    imagenUrl: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=500&q=60",
    infoNutricional: {
      calorias: "130 kcal",
      proteinas: "2.7 g",
      carbos: "28 g",
      grasas: "0.3 g",
      beneficio: "Fuente de energía de fácil digestión."
    }
  },
];


interface InfoNutricional {
  calorias: string;
  proteinas: string;
  carbos: string;
  grasas: string;
  beneficio: string;
}

interface CardData {
  id: number;
  alimento: string;
  estado: string;
  porcentaje: number;
  fecha: string;
  imagenUrl: string;
  infoNutricional: InfoNutricional;
}

function NutritionModal({ data, onClose }: { data: CardData, onClose: () => void }) {
  if (!data) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">🥗 Análisis Nutricional: {data.alimento}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="text-center mb-3">
              <img 
                src={data.imagenUrl} 
                alt={data.alimento} 
                className="rounded-circle shadow-sm"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </div>
            

            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <td>⚡ Calorías</td>
                  <td className="fw-bold">{data.infoNutricional.calorias}</td>
                </tr>
                <tr>
                  <td>🥩 Proteínas</td>
                  <td>{data.infoNutricional.proteinas}</td>
                </tr>
                <tr>
                  <td>🍞 Carbohidratos</td>
                  <td>{data.infoNutricional.carbos}</td>
                </tr>
                <tr>
                  <td>🥑 Grasas</td>
                  <td>{data.infoNutricional.grasas}</td>
                </tr>
              </tbody>
            </table>

            <div className="alert alert-info mt-3">
              <i className="bi bi-info-circle-fill me-2"></i>
              <strong>IA Insight:</strong> {data.infoNutricional.beneficio}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}


function SingleCard({ data, onVerDetalles }: { data: CardData, onVerDetalles: (item: CardData) => void }) {

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

  const fallbackImage = "https://placehold.co/500x300?text=Imagen+No+Disponible";

  return (
    <div className="card shadow-sm border-0 h-100 hover-effect">
      <div style={{ position: 'relative' }}>
        <img
          src={data.imagenUrl}
          className="card-img-top"
          alt={data.alimento}
          style={{ height: "200px", objectFit: "cover" }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
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
          <button 
            className="btn btn-primary btn-sm w-100 me-2"
            onClick={() => onVerDetalles(data)}
          >
            Ver Nutrición
          </button>
        </div>
      </div>

      <div className="card-footer text-muted text-center small">
        {data.fecha}
      </div>
    </div>
  );
}


function Card() {

  const [selectedFood, setSelectedFood] = useState<CardData | null>(null);

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

              <SingleCard data={item} onVerDetalles={setSelectedFood} />
            </div>
          ))}
        </div>
      </div>

      {selectedFood && (
        <NutritionModal 
          data={selectedFood} 
          onClose={() => setSelectedFood(null)} 
        />
      )}
    </div>
  );
}

export default Card;