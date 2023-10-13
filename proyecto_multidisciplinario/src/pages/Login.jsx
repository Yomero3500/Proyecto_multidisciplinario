import React from 'react'
import '../styles/Login.css'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='Container'>
        <div className='Fondo-login'></div>
        <div className='Formulario'>
          <div>
          <div class="container2">
        <h className="H2P">Bienvenido</h>
        <form>
            <input type="text" placeholder="Usuario"  />
            <input type="password" placeholder="Contraseña"  />
            <button className='ini' type="submit" as={Link} to='/inicio'>
               Iniciar sesión
              </button>
        </form>
        <p><a href="#">¿Olvidaste tu contraseña?</a></p>
    </div>
          </div>
        </div>
    </div>
  )
}

export default Login