import React from "react";
import { useForm } from "react-hook-form";
import KodiMusic from "../assets/KodiMusic.png";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="info">
      <header className="header_logo_info">
        <div className="logo_header_logo_info">
          <div className="logoHeaderInfo">
            <img src={KodiMusic} alt="Logo sitio" />
          </div>
        </div>
      </header>
      <div className="contenedorInfo">
        <div className="contenedorInfo_titulo">
          <p>Regístrate para empezar a escuchar contenido</p>
        </div>
        <div className="contenedorInfo_formulario">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Dirección de email</label>
          <div className="input"><input placeholder="nombre@dominio.com"
            type="text"
            id="email"
            {...register("email", {
              required: "Este campo es obligatorio",
              validate: (value) =>
                value.includes("@") || "Este email no es válido. Asegúrate de que tenga un formato como este: ejemplo@email.com",
            })}
          /></div>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit">Siguiente</button>
      </form>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
