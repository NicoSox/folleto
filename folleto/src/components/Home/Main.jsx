import React from 'react'
import '../../style/css/Main.css'

const MainSistemas = () => {
  return (
    <div className='MainHome'>
      <div className='overlay'>
        <h2 className='titleHome'>
          ¿Por qué deberías elegir la Ingeniería en Sistemas de la Información de la UTN?
        </h2>

        <ul className="lista">
          <li className="items">
            <strong>🏛️ Prestigio y respaldo nacional:</strong> La UTN es la única universidad pública argentina dedicada exclusivamente a la ingeniería, otorgando gran valor al título obtenido.
          </li>
          <li className="items">
            <strong>⚙️ Formación práctica desde el inicio:</strong> Desde los primeros años se aplican conocimientos en proyectos reales con tecnologías de la industria.
          </li>
          <li className="items">
            <strong>💼 Inserción laboral asegurada:</strong> Los estudiantes suelen incorporarse al ámbito profesional incluso antes de finalizar la carrera.
          </li>
          <li className="items">
            <strong>🌐 Red de contactos y oportunidades:</strong> La presencia nacional de la UTN permite construir una red profesional sólida y estratégica.
          </li>
          <li className="items">
            <strong>🚀 Actualización constante:</strong> Los planes de estudio se adaptan a las tendencias tecnológicas para asegurar una formación vigente y relevante.
          </li>
          <li className="items">
            <strong>💰 Relación costo-beneficio favorable:</strong> Educación pública de calidad internacional con un costo mínimo.
          </li>
          <li className="items">
            <strong>🤝 Desarrollo integral:</strong> Además de lo técnico, se promueven habilidades blandas como liderazgo y trabajo en equipo.
          </li>
        </ul>

        <div className="testimonios">
          <h3 className="titleTestimonios">💬 Testimonios de estudiantes y egresados</h3>

          <div className="cards-container">
            <div className="card">
              <p className="texto">“Los proyectos prácticos desde el primer año me dieron la confianza para enfrentar desafíos reales en empresas de software.”</p>
              <h4 className="autor">— Mariana López, 4° año</h4>
            </div>

            <div className="card">
              <p className="texto">“Gracias a la UTN conseguí prácticas profesionales que me permitieron desarrollar un portafolio sólido antes de recibirme.”</p>
              <h4 className="autor">— Diego Fernández, Egresado 2021</h4>
            </div>

            <div className="card">
              <p className="texto">“Aprender en UTN Sistemas me permitió participar en hackathons y proyectos colaborativos, ampliando mi red profesional y habilidades técnicas.”</p>
              <h4 className="autor">— Valentina Ramos, Ingeniera en Sistemas</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSistemas
