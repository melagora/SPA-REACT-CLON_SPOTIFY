import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Registrate from "../Componentes/Registro";

export default function PieDePagina() {
  return (
    // <BrowserRouter>
    <div className="footer">
      <div className="foot1">
        <p className="tittleFooter">Muestra de KodiMusic </p>
        <p className="textFooter">
          Regístrate para acceder a canciones y podcast ilimitados con algunos
          anuncios. No necesitas tarjeta de crédito
        </p>
      </div>
      {/* <Link to="/registrate"> */}
      <div className="foot2">
        <a href="https://www.linkedin.com/in/melagora/" target="blank">
          <div className="btnFooter">
            <p>Melvin González (in)</p>
          </div>
        </a>
      </div>
      {/* </Link> */}
    </div>

    //   {/* <Routes>
    //     <Route path="/registrate" element={<Registrate />} />
    //   </Routes>
    // </BrowserRouter> */}
  );
}
