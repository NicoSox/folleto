import React from 'react'
import '../../style/css/MainCivil.css'

const MainCivil = () => {
  return (
    <section className='MainCivil'>
      <div className='overlay'>
        <h2 className='titleHome'>
          ¿Por qué deberías elegir la Ingeniería Civil en la UTN?
        </h2>

        <ul className="lista">
          <li className="items">
            <strong>🏗️ Formación sólida y reconocida:</strong> La UTN es referente nacional en ingeniería, garantizando una preparación técnica rigurosa con reconocimiento en todo el país.
          </li>
          <li className="items">
            <strong>🔩 Aprendizaje práctico desde el inicio:</strong> Los estudiantes participan en proyectos de infraestructura, obras y análisis estructural desde los primeros años.
          </li>
          <li className="items">
            <strong>🌍 Amplio campo laboral:</strong> La Ingeniería Civil ofrece oportunidades en obras públicas, privadas, consultorías, gestión ambiental y planificación urbana.
          </li>
          <li className="items">
            <strong>🏢 Vínculo con la industria y organismos:</strong> La UTN mantiene convenios con empresas constructoras, organismos públicos y estudios de ingeniería, facilitando prácticas y empleo.
          </li>
          <li className="items">
            <strong>📐 Tecnología y sostenibilidad:</strong> Se incorporan herramientas modernas de diseño asistido (CAD/BIM) y conceptos de construcción sustentable.
          </li>
          <li className="items">
            <strong>💡 Innovación y desarrollo:</strong> Los proyectos académicos promueven soluciones creativas a problemáticas reales de infraestructura y urbanismo.
          </li>
          <li className="items">
            <strong>🤝 Formación humana y profesional:</strong> Se impulsa el liderazgo, la responsabilidad social y la ética profesional como pilares de la carrera.
          </li>
        </ul>

        <div className="testimonios">
          <h3 className="titleTestimonios">💬 Testimonios de estudiantes y egresados</h3>

          <div className="cards-container">
            <div className="card">
              <p className="texto">“Participar en proyectos de construcción real desde el primer año me permitió comprender la importancia de la planificación y la seguridad en obras.”</p>
              <h4 className="autor">— Carlos Méndez, 3° año</h4>
            </div>

            <div className="card">
              <p className="texto">“Gracias a las prácticas y convenios de la UTN conseguí mi primer trabajo en una empresa constructora mientras cursaba la carrera.”</p>
              <h4 className="autor">— Lucía Fernández, Egresada 2020</h4>
            </div>

            <div className="card">
              <p className="texto">“La combinación de teoría, laboratorios y proyectos me preparó para liderar equipos de ingeniería y proyectos urbanos complejos.”</p>
              <h4 className="autor">— Juan Pérez, Ingeniero Civil</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainCivil
