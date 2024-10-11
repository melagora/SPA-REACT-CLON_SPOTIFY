import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Inicio from "../Componentes/Inicio";
import ExplorarCatalogo from "../Componentes/ExplorarCatalogo";
import Registrate from "../Componentes/Registro";
import IniciarSesion from "../Componentes/IniciarSesion";
import KodiMusic from "../assets/KodiMusic.png";
import icoHomeWhite from "../assets/icoHomeWhite.png";
import searchWhite from "../assets/searchWhite.png";
import exploreWhite from "../assets/exploreWhite.png";

export default function Menu() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <div className="logo1">
              <div className="logoInicio">
                <li>
                  <Link to="/">
                    <img src={KodiMusic} alt="Logo sitio" />
                  </Link>
                </li>
              </div>
            </div>
            <div className="buscador">
              <div className="homeLogo">
                <li>
                  <Link to="/">
                    <img src={icoHomeWhite} alt="Home Logo" />
                  </Link>
                </li>
              </div>
              <div className="explorar">
                <li>
                  <Link to="explorar">
                    <div class="input-container">
                      <div className="searchWhite">
                        <img src={searchWhite} alt="Ícono de búsqueda" />
                      </div>
                      <input type="text" placeholder="¿Qué quieres reproducir?..." />
                      <div className="exploreWhite">
                        <img src={exploreWhite} alt="Ícono de búsqueda" />
                      </div>
                    </div>
                  </Link>
                </li>
              </div>
            </div>
            <div className="formularios">
              <div className="form1">
                <li>
                  <Link to="registrate">
                    <p className="registro">Regístrate</p>
                  </Link>
                </li>
              </div>
              <div className="form2">
                <li>
                  <Link to="iniciar-sesion">
                    <p>Iniciar sesión</p>
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/explorar" element={<ExplorarCatalogo />} />
        <Route path="/registrate" element={<Registrate />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
      </Routes>
    </BrowserRouter>
  );
}
