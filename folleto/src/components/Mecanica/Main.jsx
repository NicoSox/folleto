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
      </div>
    </div>
  )
}

export default MainMecanica
