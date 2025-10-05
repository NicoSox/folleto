import React from "react";
import "../../style/css/IntroUTN.css";

const IntroUTN = () => {
  return (
    <div className="IntroUTN">
      <div className="overlay">
        <h1 className="main-title">Bienvenidos a la UTN - Facultad Regional Tucumán</h1>
        <p className="intro-text">
          La Universidad Tecnológica Nacional es la única institución pública argentina dedicada íntegramente a la formación en ingeniería y carreras tecnológicas. Aquí encontrarás una educación de excelencia, con fuerte orientación práctica y conexiones estratégicas en la industria.
        </p>

        <h2 className="section-title">Nuestras Ingenierías</h2>

        <div className="cards-container">
          <div className="card">
            <h3>Sistemas de Información</h3>
            <p>
              Forma profesionales capaces de diseñar, implementar y administrar soluciones informáticas innovadoras.
            </p>
          </div>

          <div className="card">
            
             <h3>Electrónica</h3>
            <p>
              Forma profesionales en automatización, control y diseño de sistemas electrónicos y de comunicación.
            </p>
            
          </div>

          <div className="card">
            <h3>Energía Eléctrica</h3>
            <p>
              Prepara especialistas en generación, distribución y control de sistemas eléctricos.
            </p>
          </div>

          <div className="card">
            <h3>Mecánica</h3>
            <p>
              Forma ingenieros capaces de diseñar y mantener sistemas mecánicos y maquinarias industriales.
            </p>
          </div>

          <div className="card">
           <p>
            <h3>Civil</h3>
              Forma ingenieros con capacidad para proyectar, construir y supervisar obras civiles de todo tipo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroUTN;
