import React, { useState } from 'react';
import '../style/css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className='navbar'>
                <div className='firstnav'>
                    <img className='logo' src="/UTNnav.png" alt="Logo UTN" />
                </div>
                <div className='secondnav'>
                    <h4 className="title">Ingeniería en Sistemas: la carrera que impulsa el futuro</h4>
                </div>
                <div className='thirdnav'>
                    <h4 className='buttonOne'><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link></h4>
                    <h4 className='buttonTwo'><Link to="/SaberMas" style={{ color: 'inherit', textDecoration: 'none' }}>¿Como me inscribo?</Link></h4>
                    <h4 className='buttonThree'><a href='https://frt.utn.edu.ar/' style={{ color: 'inherit', textDecoration: 'none' }}>Sitio oficial</a></h4>
                </div>
            </div>
        </>
    );
};

export default Navbar;