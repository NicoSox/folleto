import React from 'react'
import '../../style/css/MainEnergia.css'

const MainEnergia = () => {
  return (
    <div className='MainEnergia'>
      <div className='overlay'>
        <h2 className='titleHome'>
          ¿Por qué deberías elegir la Ingeniería en Energía Eléctrica de la UTN?
        </h2>

        <ul className="lista">
          <li className="items">
            <strong>🏛️ Prestigio y formación especializada:</strong> La UTN ofrece conocimientos sólidos en generación, distribución y gestión de energía eléctrica, con reconocimiento nacional.
          </li>
          <li className="items">
            <strong>⚡ Experiencia práctica desde temprano:</strong> Laboratorios eléctricos, paneles de control y proyectos de energías renovables aseguran aprendizaje aplicado.
          </li>
          <li className="items">
            <strong>💼 Alta empleabilidad:</strong> La demanda de ingenieros en energía es creciente en empresas de generación, distribución y consultoría eléctrica.
          </li>
          <li className="items">
            <strong>🌱 Innovación y energías renovables:</strong> Tecnologías de eficiencia energética, solar, eólica y smart grids.
          </li>
          <li className="items">
            <strong>🤝 Conexión con la industria:</strong> Convenios con empresas energéticas y organismos públicos facilitan prácticas y empleos.
          </li>
          <li className="items">
            <strong>💡 Desarrollo integral:</strong> Se fomentan habilidades blandas, liderazgo y ética profesional aplicables en cualquier proyecto energético.
          </li>
        </ul>

        <div className="testimonios">
          <h3 className="titleTestimonios">💬 Testimonios de estudiantes y egresados</h3>
          
          <div className="cards-container">
            <div className="card">
              <p className="texto">“Elegí Energía Eléctrica porque siempre me apasionó entender cómo funciona el sistema energético del país. La UTN me dio la oportunidad de trabajar en proyectos reales desde los primeros años.”</p>
              <h4 className="autor">— Lucía Fernández, 4° año</h4>
            </div>

            <div className="card">
              <p className="texto">“Gracias a las prácticas en empresas distribuidoras, logré insertarme laboralmente antes de recibirme. La carrera combina teoría y práctica de una manera excelente.”</p>
              <h4 className="autor">— Marcos Ruiz, Egresado 2023</h4>
            </div>

            <div className="card">
              <p className="texto">“La UTN me abrió las puertas al mundo de las energías renovables. Hoy formo parte de un proyecto solar en el norte argentino. Sin dudas, una decisión que cambió mi vida.”</p>
              <h4 className="autor">— Natalia Gómez, Ingeniera en Energía</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainEnergia
