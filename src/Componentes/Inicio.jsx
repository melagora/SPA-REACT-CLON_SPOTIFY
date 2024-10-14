import React from "react";
import playWhite from "../assets/playWhite2.png";
import BadBunny from "../assets/cantantes/BadBunny.jpg";
import KarolG from "../assets/cantantes/KarolG.png";
import Feid from "../assets/cantantes/Feid.png";
import Maluma from "../assets/cantantes/Maluma.png";

export default function Inicio() {
  return (
    <main>
      <div className="info">
        <div className="contenedorPrincipalInfo">
          <div className="titulo_main">
            <div className="encabezado_main_artistas1">
              <p>Artistas Populares</p>
            </div>
            <div className="encabezado_main_artistas2">
              <p>Mostrar todo</p>
            </div>
          </div>
          <div className="artistas_populares">
            <div className="card_por_artista">
              <div className="imagenArtista">
                <img src={BadBunny} alt="imagenArtista" />
                <div className="play">
                  <img src={playWhite} alt="play" />
                </div>
              </div>
              <div className="nombre_artista">
                <p>Bad Bunny</p>
              </div>
              <div className="etiqueta_card_artista">
                <p>Artista</p>
              </div>
            </div>
            <div className="card_por_artista">
              <div className="imagenArtista">
                <img src={KarolG} alt="imagenArtista" />
                <div className="play">
                  <img src={playWhite} alt="play" />
                </div>
              </div>
              <div className="nombre_artista">
                <p>Carol G</p>
              </div>
              <div className="etiqueta_card_artista">
                <p>Artista</p>
              </div>
            </div>
            <div className="card_por_artista">
              <div className="imagenArtista">
                <img src={Feid} alt="imagenArtista" />
                <div className="play">
                  <img src={playWhite} alt="play" />
                </div>
              </div>
              <div className="nombre_artista">
                <p>Feid</p>
              </div>
              <div className="etiqueta_card_artista">
                <p>Artista</p>
              </div>
            </div>
            <div className="card_por_artista">
              <div className="imagenArtista">
                <img src={Maluma} alt="imagenArtista" />
                <div className="play">
                  <img src={playWhite} alt="play" />
                </div>
              </div>
              <div className="nombre_artista">
                <p>Maluma</p>
              </div>
              <div className="etiqueta_card_artista">
                <p>Artista</p>
              </div>
            </div>
          </div>
          <div className="titulo_main">
            <div className="encabezado_main_artistas1">
              <p>Álbumes Populares</p>
            </div>
            <div className="encabezado_main_artistas2">
              <p>Mostrar todo</p>
            </div>
          </div>
          <div className="artistas_populares">
            <div className="card_por_artista">
              <div className="albunArtista">
                <img src={BadBunny} alt="imagenArtista" />
                <div className="play">
                  <img src={playWhite} alt="play" />
                </div>
              </div>
              <div className="nombre_artista">
                <p>Bad Bunny</p>
              </div>
              <div className="etiqueta_card_artista">
                <p>Artista</p>
              </div>
            </div>
            <div className="card_por_artista">
              <div className="albunArtista">
                <img src={KarolG} alt="imagenArtista" />
                <div className="play">
                  <img src={playWhite} alt="play" />
                </div>
              </div>
              <div className="nombre_artista">
                <p>Carol G</p>
              </div>
              <div className="etiqueta_card_artista">
                <p>Artista</p>
              </div>
            </div>
            <div className="card_por_artista">
              <div className="albunArtista">
                <img src={Feid} alt="imagenArtista" />
                <div className="play">
                  <img src={playWhite} alt="play" />
                </div>
              </div>
              <div className="nombre_artista">
                <p>Feid</p>
              </div>
              <div className="etiqueta_card_artista">
                <p>Artista</p>
              </div>
            </div>
            <div className="card_por_artista">
              <div className="albunArtista">
                <img src={Maluma} alt="imagenArtista" />
                <div className="play">
                  <img src={playWhite} alt="play" />
                </div>
              </div>
              <div className="nombre_artista">
                <p>Maluma</p>
              </div>
              <div className="etiqueta_card_artista">
                <p>Artista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
