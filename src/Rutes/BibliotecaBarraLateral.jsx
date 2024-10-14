import React from "react";
import libraryWhite from "../assets/libraryWhite.png";
import plus from "../assets/plus.png";
import planet_white from "../assets/planet_white.png";

export default function BibliotecaBarraLateral() {
  return (
    <aside>
      <div className="bibliotecaLateral">
        <div className="bibliotecaLateralContendor1">
          <div className="bibliotecaLateralContendor1-UNO">
            <div className="biblioteca">
              <div>
                <img src={libraryWhite} alt="Logo sitio" />
              </div>
              <div className="biblioteca-div-text">
                <p>Tu Biblioteca</p>
              </div>
            </div>
            <div className="plus">
              <div>
                <img src={plus} alt="Logo sitio" />
              </div>
            </div>
          </div>
          <div className="bibliotecaLateralContendor1-DOS">
            <p>Crea tu primera playlist</p>
            <p>¡Es muy fácil! Te vamos a ayudar.</p>
            <button>Crear Playlist</button>
          </div>
          <div className="bibliotecaLateralContendor1-TRES">
            <p>Busquemos algunos podcasts para seguir</p>
            <p>Te mantendremos al tanto de los nuevos episodios.</p>
            <button>Explorar podcasts</button>
          </div>
        </div>
        <div className="bibliotecaLateralContendor2">
          <div className="bibliotecaLateralContendor2-UNO">
            <p>
              <a
                href="https://www.spotify.com/sv/legal/end-user-agreement/"
                target="blank"
                class="enlace"
              >
                Legal
              </a>
            </p>
            <p>
              <a
                href="https://www.spotify.com/sv/safetyandprivacy"
                target="blank"
                class="enlace"
              >
                Seguridad y Centro de Privacidad
              </a>
            </p>
            <p>
              <a
                href="https://www.spotify.com/sv/legal/privacy-policy/"
                target="blank"
                class="enlace"
              >
                Política de Privacidad
              </a>
            </p>
            <p>
              <a
                href="https://www.spotify.com/sv/legal/cookies-policy/"
                target="blank"
                class="enlace"
              >
                Cookies
              </a>
            </p>
            <p>
              <a
                href="https://www.spotify.com/sv/legal/privacy-policy/#s3"
                target="blank"
                class="enlace"
              >
                Sobre los anuncios
              </a>
            </p>
            <p>
              <a
                href="https://www.spotify.com/sv/accessibility"
                target="blank"
                class="enlace"
              >
                Accesibilidad
              </a>
            </p>
          </div>
          <div className="bibliotecaLateralContendor2-DOS">
            <a
              href="https://www.spotify.com/sv/legal/cookies-policy/"
              target="blank"
              class="enlace"
            >
              <p>Cookies</p>
            </a>
          </div>
          <div className="bibliotecaLateralContendor2-TRES">
            <button>
              <div className="planet">
                <img src={planet_white} alt="Logo sitio" />
              </div>
              <div>
                <p>Español de Latinoamérica</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
