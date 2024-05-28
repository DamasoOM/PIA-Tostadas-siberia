import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import '../../styles/inicioadmin.css'
import AdminNav from "../../components/admin/AdminNav";
import AdminLayout from "../../components/admin/AdminLayout";

const Admin = () => {
    const router = useRouter();
    const { state, setState } = useContext(GlobalStateContext);
    const navigateTo = (route) => {
        router.push(route)
    }

    useEffect(()=>{
        if(state.role != 1){
            navigateTo("/")
        }
    },[])
    return(
        <AdminLayout>

                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">TOSTADAS EL CERRO</h1>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Productos:</h5>
                                        <p class="card-text">.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Categorías:</h5>
                                        <p class="card-text">.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Ganancias de hoy:</h5>
                                        <p class="card-text">$</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Productos con bajo inventario:</h5>
                                        <p class="card-text">.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Próxima fecha de entrega:</h5>
                                        <p class="card-text">:</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2>Pedidos / Ventas</h2>
                        <div class="table-responsive">
                            <table class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>No. pedido</th>
                                        <th>Cliente</th>
                                        <th>Fecha / Hora</th>
                                        <th>Estado</th>
                                        <th>Ganancia</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>$</td>
                                        <td><button class="btn btn-sm btn-warning edit-btn" data-id="" data-client="" data-date="" data-status="" data-profit="$">✏️</button></td>
                                    </tr>
                                    <tr>
                                        <td>#</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>$</td>
                                        <td><button class="btn btn-sm btn-warning edit-btn" data-id="" data-client="" data-date="" data-status="" data-profit="$">✏️</button></td>
                                    </tr>
                                    <tr>
                                        <td>#</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>$</td>
                                        <td><button class="btn btn-sm btn-warning edit-btn" data-id="" data-client="" data-date="" data-status="" data-profit="$">✏️</button></td>
                                    </tr>
                                    <tr>
                                        <td>#</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>$</td>
                                        <td><button class="btn btn-sm btn-warning edit-btn" data-id="" data-client="" data-date="" data-status="" data-profit="$">✏️</button></td>
                                    </tr>
                                    <tr>
                                        <td>#</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>$</td>
                                        <td><button class="btn btn-sm btn-warning edit-btn" data-id="" data-client="" data-date="" data-status="" data-profit="$">✏️</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </AdminLayout>
    )
}

export default Admin