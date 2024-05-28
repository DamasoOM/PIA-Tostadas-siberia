// pages/login.js
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';

const Login = () => {
  const router = useRouter();
  const { state, setState } = useContext(GlobalStateContext);

  useEffect(() => {
    if (state.isAuthenticated) {
      if (state.role === 'admin') {
        router.push('/admin'); // Redirigir a la página de administrador si el rol es admin
      } else {
        router.push('/'); // Redirigir a la página de usuario si el rol es user
      }
    }
  }, [state.isAuthenticated, router]);

  const handleLogin = (role) => {
    // Aquí pones tu lógica de autenticación
    setState({
      ...state,
      user: { name: 'John Doe', email: 'john@example.com' },
      isAuthenticated: true,
      role: role,
    });
  };

  if (state.isAuthenticated) {
    return <p>Redirecting...</p>; // Mensaje de redirección mientras se realiza la redirección
  }

  return (
    <div>
      <h1 className='text-red-200'>Login Page</h1>
      <button onClick={() => handleLogin('user')}>Login as User</button>
      <button onClick={() => handleLogin('admin')}>Login as Admin</button>
    </div>
  );
};

export default Login;
