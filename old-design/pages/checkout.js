import { useContext, useEffect, useState } from 'react';
import '../styles/style4.css'
import { GlobalStateContext } from '../context/GlobalStateContext';
import { useRouter } from 'next/router';

const Checkout = () => {

    const router = useRouter();
    const { cart, setCart } = useContext(GlobalStateContext);
    const [total, setTotal] = useState(0)
    const [isPickup, setIsPickup] = useState(false)
    const onNewOrder = async (order) => {
        //const { data, error } = await supabase.from('orders').insert([order]);
        //console.log(carrito"carrito")
    }

    useEffect(()=>{
        const sumaTotal = cart.reduce((price, objeto) => {
            return price + objeto.price;
          }, 0);
        console.log(sumaTotal, total)
        setTotal(sumaTotal);
    },[cart])

    const handleTypeChange = (event) => {
        const { value } = event.target; // Obtiene el valor booleano de la opción seleccionada
        setIsPickup(value === 'true');
      };

    const navigateTo = (route) => {
        router.push(route)
    }

    return(
        <main>
        <div class="container">
            <h1>Compra</h1>
            <div class="order-container">
                <div class="order-left">
                    <div class="order-type">
                        <h2>Tipo de orden</h2>
                        <div className="radio-group">
                            <label>
                                <input
                                type="radio"
                                name="orderType"
                                value={false}
                                checked={!isPickup} // Verifica si esta opción está seleccionada
                                onChange={handleTypeChange} // Maneja el cambio de selección
                                />
                                <span>A domicilio</span>
                            </label>
                            {!isPickup && ( // Muestra el select solo si la opción "A domicilio" está seleccionada
                                <div className="delivery-time">
                                Entregar ahora
                                <select>
                                    <option>Entrega estimada: 35 min</option>
                                </select>
                                </div>
                            )}
                            <label>
                                <input
                                type="radio"
                                name="orderType"
                                value={true}
                                checked={isPickup} // Verifica si esta opción está seleccionada
                                onChange={handleTypeChange} // Maneja el cambio de selección
                                />
                                <span>Para recoger</span>
                            </label>
                            </div>
                    </div>
                    <div class="shipping-address">
                        <h2>Dirección de envío</h2>
                        <input type="text" placeholder="Calle"/>
                        <input type="text" placeholder="Entre calles"/>
                        <input type="text" placeholder="Número exterior"/>
                        <input type="text" placeholder="Número interior"/>
                        <input type="text" placeholder="Colonia"/>
                        <input type="text" placeholder="Municipio"/>
                        <input type="text" placeholder="Nuevo León" disabled/>
                        <input type="text" placeholder="Código postal"/>
                        <input type="text" placeholder="Referencias de entrega"/>
                        <div class="address-buttons">
                            <a onClick={()=>navigateTo('/about-us')}><button class="cancel-button">Cancelar</button></a>
                            <button class="save-button">Guardar</button>
                        </div>
                    </div>
                    <div class="payment-method">
                        <h2>Forma de pago</h2>
                        <div class="radio-group">
                            <label>
                                <input type="radio" name="paymentMethod" checked/>
                                <span>Efectivo</span>
                            </label>
                            <label>
                                <input type="radio" name="paymentMethod"/>
                                <span>Terminal inalámbrica al entregar</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="order-right">
                    <div class="order-summary">
                        <div class="item">

                            <button class="remove-button">🗑️</button>
                        </div>
                        <div class="subtotal">
                            <span>Subtotal</span>
                            <span>${total}.00</span>
                        </div>
                        <div class="shipping-cost">
                            <span>Costo de envío</span>
                            <span>$45.00</span>
                        </div>
                        <div class="total">
                            <span>Subtotal</span>
                            <span>${total+45}.00</span>
                        </div>
                        <button  class="continue-shopping"> <a onClick={()=>navigateTo('/')}> Seguir comprando</a></button>
                        <button class="checkout-button">Subtotal</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Checkout