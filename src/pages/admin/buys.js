import AdminLayout from "../../components/admin/AdminLayout"

const Buys = () => {
    return(
        <AdminLayout>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Adquisiciones</h1>
                </div>

                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>No. orden</th>
                                <th>Proveedor</th>
                                <th>Fecha de entrega</th>
                                <th>Detalles</th>
                                <th>Costo</th>
                            </tr>
                        </thead>
                        <tbody id="acquisitionsTableBody">
                            {/* <!-- Las filas se llenarán automáticamente usando la API --> */}
                        </tbody>
                    </table>
                </div>
            </main>
        </AdminLayout>
    )
}

export default Buys