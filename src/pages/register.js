import { useRouter } from 'next/router';
import '../styles/Style3.css'

const Register = () => {
    const router = useRouter();
    const navigateTo = (route) => {
        router.push(route)
      }

    return(
        <div class="container">
            <header class="header">
                <img src="assets/logo.png" alt="Tostadas El Cerro"/>
                <h1>TOSTADAS EL CERRO</h1>
            </header>
            <main class="main-content">
                <form class="register-form">
                    <h2>Regístrate</h2>
                    <label for="firstname">Nombre(s)</label>
                    <input type="text" id="firstname" name="firstname" required/>
                    
                    <label for="lastname">Apellido(s)</label>
                    <input type="text" id="lastname" name="lastname" required/>
                    
                    <label for="phone">Teléfono</label>
                    <input type="tel" id="phone" name="phone" required/>
                    
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required/>
                    
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required/>
                    
                    <label for="confirm-password">Confirmar contraseña</label>
                    <input type="password" id="confirm-password" name="confirm-password" required/>
                    
                    <button type="submit">Registrarse</button>
                </form>
                <a onClick={()=>navigateTo("/login")} class="create-account">¿Ya tienes una cuenta?</a>
            </main>
        </div>
    )
}

export default Register