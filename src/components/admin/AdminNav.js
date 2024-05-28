import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../context/GlobalStateContext";

const AdminNav = () => {

    const router = useRouter();
    const [activeTab, setActiveTab] = useState('/admin')
    const { state, setState } = useContext(GlobalStateContext);
    const navigateTo = (route) => {
        router.push(route)
    }

    useEffect(()=>{
        setActiveTab(router.pathname)
    },[router])

    const onLogout = () => {
        setState({
            user: null,
            isAuthenticated: false,
            role: null,
        })
        navigateTo('/')
    }

    return(
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a className={`nav-link ${activeTab == "/admin" ? "active" : ""}`} onClick={()=>navigateTo('/admin')}>
                                        <span data-feather="home"></span>
                                        <p className="text-black">Inicio</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className={`nav-link ${activeTab == "/admin/sales" ? "active" : ""}`} onClick={()=>navigateTo('/admin/sales')}>
                                        
                                        <p className="text-black">Pedidos / Ventas</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className={`nav-link ${activeTab == "/admin/buys" ? "active" : ""}`} onClick={()=>navigateTo('/admin/buys')}>
                                        
                                        <p className="text-black">Adquisiciones</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className={`nav-link ${activeTab == "/admin/products" ? "active" : ""}`} onClick={()=>navigateTo('/admin/products')}>
                                        
                                        <p className="text-black">Productos</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className={`nav-link ${activeTab == "/admin/combos" ? "active" : ""}`} onClick={()=>navigateTo('/admin/combos')}>
                                        
                                        <p className="text-black">Combos</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className={`nav-link ${activeTab == "/admin/inventory" ? "active" : ""}`} onClick={()=>navigateTo('/admin/inventory')}>
                                        
                                        <p className="text-black">Inventario</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className={`nav-link ${activeTab == "/admin/users" ? "active" : ""}`} onClick={()=>navigateTo('/admin/users')}>
                                        
                                        <p className="text-black">Usuarios</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className={`nav-link `} onClick={()=>navigateTo('/ ')}>
                                        Página principal
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className={`px-3`}>
                                        <button onClick={onLogout}><p className="text-red-500 font-semibold">Cerrar Sesión</p></button>
                                    </a>
                                    
                                </li>
                            </ul>
                        </div>
                    </nav>
    )
}

export default AdminNav