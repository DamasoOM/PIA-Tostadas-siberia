import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';

const Home = () => {
  const router = useRouter();
  const { state } = useContext(GlobalStateContext);

  useEffect(() => {
    if (!state.isAuthenticated) {
      router.push('/login');
    }
  }, [state.isAuthenticated, router]);

  if (!state.isAuthenticated) {
    return <p>Redirecting...</p>;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
};

export default Home;
