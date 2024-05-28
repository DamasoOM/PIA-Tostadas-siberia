import { useContext, useEffect, useState } from "react"
import { supabase } from "../utils/supabase"
import '../styles/style.css'
import { GlobalStateContext } from "../context/GlobalStateContext";

const Products = () => {
    // const { data, error } = 
    const { state, setState, cart, setCart } = useContext(GlobalStateContext);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const {data, error} = await supabase.from('dishes').select('*');

        console.log("DISHES: ", data)

        setProducts(data)
    }

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    return(
        products.map((product)=>{
            return(
                <div class="item">
                    <img src="/assets/products/tostada-especial.jpg" alt="Tostada Especial"/>
                    <div class="item-details">
                        <h3>{product.name}</h3>
                        <p>{product.description || "¡Un platillo del que no te arrepentirás probar!"}</p>
                        <span class="price">${product.price}.00</span>
                        <div className="w-10"></div>
                        <button onClick={()=>addToCart(product)}>Agregar</button>
                    </div>
                </div>
            )
        })
    )
}

export default Products