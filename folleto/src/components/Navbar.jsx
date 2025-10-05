import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img className="logo" src="/UTNnav.png" alt="Logo UTN" />
        <h1 className="nav-title">Explorá las Ingenierías de la UTN</h1>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/Home">Inicio</Link>
        <Link to="/SaberMas">¿Cómo me inscribo?</Link>

        {/* Dropdown controlado sobre el contenedor padre */}
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="dropbtn">Ingenierias ▼</button>

          <div
            className="dropdown-content"
            style={{ display: dropdownOpen ? "flex" : "none" }}
          >
            <Link to="/Civil">Civil</Link>
            <Link to="/Energia">Energía Eléctrica</Link>
            <Link to="/Mecanica">Mecánica</Link>
            <Link to="/Electronica">Electrónica</Link>
            <Link to="/">Sistemas</Link>
          </div>
        </div>

        <a
          href="https://frt.utn.edu.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sitio oficial
        </a>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
