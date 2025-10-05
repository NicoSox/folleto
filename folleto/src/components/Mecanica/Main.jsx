import React from 'react'
import '../../style/css/MainMeca.css'

const MainMecanica = () => {
  return (
    <div className='MainMeca'>
      <div className='overlay'>
        <h2 className='titleHome'>
          ¿Por qué deberías elegir la Ingeniería Mecánica de la UTN?
        </h2>

        <ul className="lista">
          <li className="items">
            <strong>🏛️ Prestigio y formación especializada:</strong> La UTN ofrece una educación reconocida nacionalmente, enfocada en ingeniería mecánica.
          </li>
          <li className="items">
            <strong>⚙️ Experiencia práctica desde temprano:</strong> Laboratorios, talleres y proyectos aplicados garantizan formación práctica desde los primeros años.
          </li>
          <li className="items">
            <strong>💼 Alta empleabilidad:</strong> La demanda de ingenieros mecánicos es constante en industrias automotriz, manufactura, energías y más.
          </li>
          <li className="items">
            <strong>🌐 Red de contactos y oportunidades:</strong> Convenios con empresas y presencia nacional permiten construir una sólida red profesional.
          </li>
          <li className="items">
            <strong>🚀 Actualización constante:</strong> Los planes de estudio se adaptan a nuevas tecnologías, CAD, robótica y procesos de manufactura modernos.
          </li>
          <li className="items">
            <strong>💡 Desarrollo integral:</strong> Se promueven habilidades blandas, liderazgo y trabajo en equipo, esenciales en cualquier proyecto.
          </li>
        </ul>

        <div className="testimonios">
          <h3 className="titleTestimonios">💬 Testimonios de estudiantes y egresados</h3>

          <div className="cards-container">
            <div className="card">
              <p className="texto">“Gracias a los talleres y laboratorios pude aplicar conceptos desde el primer año, lo que me dio mucha confianza en proyectos reales.”</p>
              <h4 className="autor">— Martín López, 2° año</h4>
            </div>

            <div className="card">
              <p className="texto">“Participar en proyectos mecánicos con empresas asociadas a la UTN me permitió conseguir prácticas profesionales antes de graduarme.”</p>
              <h4 className="autor">— Valentina Gómez, Egresada 2019</h4>
            </div>

            <div className="card">
              <p className="texto">“El enfoque práctico y la actualización constante en tecnología me prepararon para liderar equipos de ingeniería mecánica con confianza.”</p>
              <h4 className="autor">— Diego Fernández, Ingeniero Mecánico</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMecanica
