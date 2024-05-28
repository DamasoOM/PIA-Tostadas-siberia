import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";

const Header = () => {
    const router = useRouter();
    const { state, setState } = useContext(GlobalStateContext);

    const navigateTo = (route) => {
        router.push(route);
    }

    return(
        <header>

            <img src="assets/logo.png" />
            <h1 onClick={()=>navigateTo('/')}>TOSTADAS EL CERRO</h1>
            <nav>
                <ul>
                    <li><a href="#">TOSTADAS</a></li>
                    <li><a href="#">TACOS</a></li>
                    <li><a href="#">CONSOMÉ</a></li>
                    <li><a href="#">CALDO</a></li>
                    <li><a href="#">ARROZ</a></li>
                    <li><a href="#">BEBIDAS Y MÁS</a></li>
                    <li><a href="#">COMBOS</a></li>
                    <li><a onClick={()=>navigateTo('/about-us')}>CONÓCENOS</a></li>
                    <li><a onClick={()=>navigateTo('/contact')}>CONTACTO</a></li>
                </ul>
            </nav>
            <div class="user-actions">
                {
                    state.user ? 
                    <>
                        <a onClick={()=>navigateTo('/profile')}>¡Bienvenido {state.user.full_name}!</a>
                    </>
                    : 
                    <>
                        <a onClick={()=>navigateTo('/login')}><button>Iniciar sesión</button></a>
                        <a onClick={()=>navigateTo('/register')}><button>Registrarse</button> </a>
                    </>
                }

                <a onClick={()=>navigateTo('/checkout')}><button>🛒</button></a>
            </div>
        </header>
    )
}

export default Header