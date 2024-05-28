import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';
import '../styles/style.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Products from '../components/Products';
import Cart from '../components/Cart';

const Index = ({Component, pageProps}) => {
  // const router = useRouter();
  const { state,cart } = useContext(GlobalStateContext);

//   useEffect(() => {
//     if (!state.isAuthenticated) {
//       router.push('/login');
//     }
//   }, [state.cart]);

  // if (!state.isAuthenticated) {
  //   return <p>Redirecting...</p>;
  // }

  return (
    <Layout>
      <main class="luk">
            <section class="menu">
                <h2>TOSTADAS</h2>
                <Products/>
                {/* <div class="item">
                    <img src="../Imagenes/tostada-especial.jpg" alt="Tostada Especial"/>
                    <div class="item-details">
                        <h3>TOSTADA ESPECIAL</h3>
                        <p>No necesita presentación, la clásica y deliciosa tostada con pollo deshebrado, aguacate y crema</p>
                        <span class="price">$80.00</span>
                        <button onclick="addToCart('Tostada Especial', 80)">Agregar</button>
                    </div>
                </div>
                <div class="item">
                    <img src="../Imagenes/Tostada-jr.jpg" alt="Tostada Junior"/>
                    <div class="item-details">
                        <h3>TOSTADA JUNIOR</h3>
                        <p>Si solo quieres un bocado, ¡esta tostada es para ti!</p>
                        <span class="price">$50.00</span>
                        <button onclick="addToCart('Tostada Junior', 50)">Agregar</button>
                    </div>
                </div> */}
            </section>
            {/* <section class="menu">
                <h2>TACOS</h2>
                <div class="item">
                    <img src="../Imagenes/Taco especial.jpg" alt="Taco Especial"/>
                    <div class="item-details">
                        <h3>TACO ESPECIAL</h3>
                        <p>Lo mejor de la tostada en un taco</p>
                        <span class="price">$65.00</span>
                        <button onclick="addToCart('Taco Especial', 65)">Agregar</button>
                    </div>
                </div>
            </section> */}
            <Cart />
        </main>
    </Layout>
  );
};

export default Index;
