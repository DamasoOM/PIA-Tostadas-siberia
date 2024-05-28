import { useRouter } from "next/router";
import { GlobalStateContext } from "../context/GlobalStateContext";
import { useContext } from "react";

const Profile = () => {
    const router = useRouter();
    const { state, setState } = useContext(GlobalStateContext);
    const navigateTo = (route) => {
        router.push(route)
    }

    const onLogout = () => {
        setState({
            user: null,
            isAuthenticated: false,
            role: null,
        })
        navigateTo('/')
    }

    // useEffect(()=>{
    //     if(state.role != "admin"){
    //         navigateTo("/")
    //     }
    // },[])
    return(
        <main>
            <section id="mi-cuenta">
                <aside>
                    <h2>MI CUENTA</h2>
                    <ul>
                        <li><a href="#" id="informacion-link">Información</a></li>
                        <li><a href="#">Direcciones</a></li>
                    </ul>
                    <a onClick={onLogout} id="logout-button">🔓</a>
                </aside>
                <div class="informacion">
                    <h2>Información</h2>
                    <form id="informacion-form">
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre"/>
                        <label for="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido"/>
                        <label for="telefono">Teléfono:</label>
                        <input type="text" id="telefono" name="telefono"/>
                        <label for="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email"/>
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="password"/>
                        <label for="confirm-password">Confirmar Contraseña:</label>
                        <input type="password" id="confirm-password" name="confirm-password"/>
                        <div class="form-buttons">
                            <button type="button" id="cancel-button">Cancelar</button>
                            <button type="submit" id="save-button">Guardar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Profile