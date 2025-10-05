import React from 'react';
import '../../style/css/SaberMas.css';

const Main = () => {
  return (
    <div className='MainSaberMas'>
      <div className='overlay'>
        <h2 className='titleMore'>
          Cómo realizar tu inscripción exitosamente en 5 simples pasos
        </h2>
        <ol className='listaMore'>
          <li className='itemsMore'>
            Ingresá al <a href="https://frt.utn.edu.ar/" target="_blank" rel="noopener noreferrer">sitio oficial de la UTN</a> y buscá la sección de <strong>“Ingreso 2026”</strong> en la parte superior.
          </li>
          <li className='itemsMore'>
            Seleccioná <strong>“Ingenierías”</strong>. Encontrarás información sobre los distintos cursos de ingreso disponibles para todas las carreras.
          </li>
          <li className='itemsMore'>
            Bajá hasta encontrar el botón <strong>“INSCRIPCIÓN - INGRESANTE 2026”</strong>, que te redirigirá a un formulario que debés completar.
          </li>
          <li className='itemsMore'>
            Revisá tu <strong>correo electrónico</strong>, ya que recibirás un mensaje para validar tu cuenta mediante el botón “Verificar Correo”.
          </li>
          <li className='itemsMore'>
            Si la verificación es exitosa, se mostrará un mensaje de confirmación y recibirás otro email con toda la información sobre tu inscripción.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Main;
