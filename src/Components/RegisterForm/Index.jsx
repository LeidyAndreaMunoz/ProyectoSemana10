import React from 'react';
import "./Resgister.css";

function Register () {
    return (
        <div className="registerContainer">
            <h3>Enviar Correo</h3>
            <form className="formulario">
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" required></input>
                </p>
                <p>
                    <label>Empresa</label>
                    <input type="text" name="empresa"></input>
                </p>
                <p>
                    <label>Correo</label>
                    <input type="email" name="email" required></input>
                </p>
                <p>
                    <label>Teléfono</label>
                    <input type="text" name="teléfono" required></input>
                </p>
                <p className="full">
                    <label>Mensaje</label>
                    <textarea name="mensaje" required></textarea>
                </p>
                <p className="full">
                    <button className="boton-enviar">Enviar</button>
                </p>
            </form>
        </div>
    );
}

export default Register;