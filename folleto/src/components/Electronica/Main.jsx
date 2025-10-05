import React from 'react'
import '../../style/css/MainElectronica.css'

const MainElectronica = () => {
  return (
    <div className='MainElectronica'>
      <div className='overlay'>
        <h2 className='titleHome'>
          ¿Por qué deberías elegir la Ingeniería Electrónica de la UTN?
        </h2>

        <ul className="lista">
          <li className="items">
            <strong>🏛️ Prestigio y formación especializada:</strong> La UTN ofrece conocimientos avanzados en circuitos, sistemas digitales y comunicación electrónica.
          </li>
          <li className="items">
            <strong>⚙️ Experiencia práctica desde el inicio:</strong> Laboratorios de electrónica, robótica y proyectos de hardware garantizan aprendizaje aplicado desde los primeros años.
          </li>
          <li className="items">
            <strong>💼 Alta empleabilidad:</strong> La demanda de ingenieros electrónicos es constante en industrias de telecomunicaciones, automatización y robótica.
          </li>
          <li className="items">
            <strong>🌐 Red de contactos y oportunidades:</strong> Convenios con empresas tecnológicas y presencia nacional permiten construir una sólida red profesional.
          </li>
          <li className="items">
            <strong>🚀 Actualización constante:</strong> Los planes de estudio se adaptan a nuevas tecnologías como IoT, microcontroladores y sistemas embebidos.
          </li>
          <li className="items">
            <strong>💡 Desarrollo integral:</strong> Se promueven habilidades blandas, trabajo en equipo y liderazgo, esenciales en cualquier proyecto tecnológico.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainElectronica
