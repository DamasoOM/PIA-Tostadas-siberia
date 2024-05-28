// components/AuthRedirect.js
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';

const AuthRedirect = () => {
  const router = useRouter();
  const { state } = useContext(GlobalStateContext);

  useEffect(() => {
    if (!state.isAuthenticated) {
      router.push('/login'); // Redirigir a la página de inicio de sesión si no está autenticado
    } 
    else {
      router.push('/'); // Redirigir a la página de inicio si está autenticado
    }
  }, [state.isAuthenticated, router]);

  return null; // No necesita renderizar nada
};

export default AuthRedirect;
