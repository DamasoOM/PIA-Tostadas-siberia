// pages/login.js
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';
import '../styles/style2.css'
import { supabase } from '../utils/supabase';

const Login = () => {
  const router = useRouter();
  const { state, setState } = useContext(GlobalStateContext);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (state.isAuthenticated) {
      console.log("IS AUTH", state)
      if (state.role == 1) {
        router.push('/admin'); // Redirigir a la página de administrador si el rol es admin
        console.log("ROUTE ADMIN")
      } 
      if (state.role == 2) {
        router.push('/employee'); // Redirigir a la página de administrador si el rol es admin
        console.log("ROUTE EMPLOYEE")
      } 
      if (state.role == 3) {
        router.push('/'); // Redirigir a la página de administrador si el rol es admin
        console.log("ROUTE /")
      } 

      // else {
      //   router.push('/'); // Redirigir a la página de usuario si el rol es user
      // }
    }
  }, [state.isAuthenticated, router]);

  const handleLogin = async () => {
    const {data, error} = await supabase.from('users').select('*').eq('email', email);
    const user = data[0]

    console.log("USER: ", data)
    setState({...state, isAuthenticated: true, role: user.role_id, user: user})
    // setState({
    //   ...state,
    //   user: { name: 'John Doe', email: 'john@example.com' },
    //   isAuthenticated: true,
    //   role: "admin",
    // });
  };

  if (state.isAuthenticated) {
    return <p>Redirecting...</p>; // Mensaje de redirección mientras se realiza la redirección
  }

  const navigateTo = (route) => {
    router.push(route)
  }

  return (
    // <div>
    //   <h1>Login Page</h1>
    //   <button onClick={() => handleLogin('user')}>Login as User</button>
    //   <button onClick={() => handleLogin('admin')}>Login as Admin</button>
    // </div>
    <body>
      <div class="container">
          <header class="header">
              <img src="assets/logo.png" alt="Tostadas El Cerro"/>
              <h1>TOSTADAS EL CERRO</h1>
          </header>
          <main class="main-content">
              <form class="login-form">
                  <h2>Iniciar sesión</h2>
                  <label for="email">Correo electrónico</label>
                  <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
                  
                  <label for="password">Contraseña</label>
                  <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
                  
                  <button 
                    // type="submit"
                    onClick={()=>handleLogin()}
                  >
                    Entrar
                  </button>
              </form>
              <a onClick={()=>navigateTo('/register')} class="create-account">Crear una cuenta</a>
          </main>
      </div>
      <footer class="footer">
          <img src="assets/logo.png" alt="Footer Logo"/>
      </footer>
      <script src="js/script2.js"></script>
  </body>
  );
};

export default Login;
