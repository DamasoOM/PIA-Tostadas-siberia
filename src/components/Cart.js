import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
import { useRouter } from "next/router";

const Cart = () => {

    const router = useRouter();
    const { cart, setCart } = useContext(GlobalStateContext);
    const [total, setTotal] = useState(0)

    const onDelete = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index,1)
        // console.log("CART", cart, index)
        setCart(updatedCart)
        // console.log("UPDATE CART", updatedCart.splice(index,1))
    }

    const navigateTo = (route) => {
        router.push(route)
    }

    useEffect(()=>{
        const sumaTotal = cart.reduce((price, objeto) => {
            return price + objeto.price;
          }, 0);
        console.log(sumaTotal, total)
        setTotal(sumaTotal);
    },[cart])

    return(
        <aside class="cart">
                <h2>Carrito</h2>
                <ul id="cart-items">
                    {
                        cart.map((product,index) => {
                            return(
                                <li>
                                    {product.name} - ${product.price}
                                    <button onClick={()=>onDelete(index)}>Eliminar</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div class="cart-total">
                    <span>Subtotal:</span>
                    <span id="cart-total">${total}.00</span>
                </div>
                <button id="confirm-order" onClick={()=>navigateTo('/checkout')}>Confirmar orden</button>
            </aside>
    )
}

export default Cart