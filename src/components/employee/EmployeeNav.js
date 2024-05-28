import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../context/GlobalStateContext";

const EmployeeNav = () => {

    const router = useRouter();
    const [activeTab, setActiveTab] = useState('/employee')
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
                                    <a className={`nav-link ${activeTab == "/employee" ? "active" : ""}`} onClick={()=>navigateTo('/employee')}>
                                        <span data-feather="home"></span>
                                        <p className="text-black">Inicio</p>
                                    </a>
                                </li>
                                
                                <li class="nav-item">
                                    <a className={`nav-link `} onClick={()=>navigateTo('/ ')}>
                                        Página principal
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
    )
}

export default EmployeeNav