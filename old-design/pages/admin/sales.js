import AdminLayout from "../../components/admin/AdminLayout"

const Sales = () => {
    return(
        <AdminLayout>

                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">TOSTADAS EL CERRO</h1>
                </div>

                <h2>Pedidos</h2>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="fromDate">Desde</label>
                        <input type="date" class="form-control" id="fromDate"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="toDate">Hasta</label>
                        <input type="date" class="form-control" id="toDate"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="status">Estado</label>
                        <select id="status" class="form-control">
                            <option selected>Todos</option>
                            <option>Pendiente</option>
                            <option>Completado</option>
                        </select>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>No. pedido</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Ganancia</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="ordersTableBody">

                        </tbody>
                    </table>
                </div>
                <div class="mt-2">
                    <p id="totalGanancia">Total: $0.00 MXN</p>
                </div>
            </main>
        </AdminLayout>
    )
}

export default Sales