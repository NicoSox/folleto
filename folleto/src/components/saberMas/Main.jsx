import React from 'react'
import '../../style/css/SaberMas.css'

const Main = () => {
  return (
    <>
      <div className='Main'>
        <ol className='listaMore'>
          <h2 className='titleMore'>A continuación, se detallará cómo hacer tu inscripción exitosamente en 5 simples pasos.</h2>
          <li className='itemsMore'>Ingresá al <a href="https://frt.utn.edu.ar/">sitio oficial de la UTN</a> y buscá la sección de "Ingreso 2026" en la parte superior.</li>
          <li className='itemsMore'>Seleccioná "Ingenierías". Encontrarás información acerca de los distintos cursos de ingreso disponibles para todas las ingenierías.</li>
          <li className='itemsMore'>Luego, bajarás y encontrarás un botón que dice "INSCRIPCIÓN-INGRESANTE 2026", el cual te redirigirá a un formulario que debes completar.</li>
          <li className='itemsMore'>A continuación deberás revisar tu email, ya que se te enviará un mensaje para validar el mismo con un botón "Verificar Correo".</li>
          <li className='itemsMore'>Seguidamente, se te redirigirá a una página que te dará el mensaje de "Verificación exitosa" en caso de que salga todo bien, y se te enviará otro mail con la información de tu inscripción.</li>
        </ol>
      </div>
    </>
  )
}

export default Main
