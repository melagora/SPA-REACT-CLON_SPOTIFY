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
        <div className="contenedorInfo_titulo_iniciarSesion">
          <p>¡Bienvenido de nuevo!</p>
        </div>
        <div className="contenedorInfo_formulario_iniciarSesion">
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="username">Nombre de usuario</label>
      <div className="input">
        <input
          placeholder="Ingresa tu nombre de usuario"
          type="text"
          id="username"
          className={errors.username ? 'input-error' : ''}
          {...register("username", {
            required: "Este campo es obligatorio",
            minLength: {
              value: 10,
              message: "El nombre de usuario debe tener al menos 10 caracteres",
            },
            validate: (value) =>
              /[!@#$%^&*(),.?":{}|<>]/.test(value) || "El nombre de usuario debe contener al menos un carácter especial",
          })}
        />
      </div>
      {errors.username && <span className="error-message">{errors.username.message}</span>}
    </div>

    <div>
      <label htmlFor="email">Dirección de email</label>
      <div className="input">
        <input
          placeholder="nombre@dominio.com"
          type="text"
          id="email"
          className={errors.email ? 'input-error' : ''}
          {...register("email", {
            required: "Este campo es obligatorio",
            validate: (value) =>
              value.includes("@") || "Este email no es válido. Asegúrate de que tenga un formato como este: ejemplo@email.com",
          })}
        />
      </div>
      {errors.email && <span className="error-message">{errors.email.message}</span>}
    </div>
    
    <button type="submit">Ingresar a mi cuenta</button>
  </form>
</div>

      </div>
    </div>
  );
};

export default MyForm;
