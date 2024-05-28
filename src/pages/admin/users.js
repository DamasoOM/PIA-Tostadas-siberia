import AdminLayout from "../../components/admin/AdminLayout"

const Users = () => {
    return(
        <AdminLayout>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Usuarios</h1>
                        <button class="btn btn-primary" id="addUserBtn">Agregar</button>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Puesto</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="usersTableBody">
                                {/* <!-- Las filas se llenarán automáticamente usando la API --> */}
                            </tbody>
                        </table>
                    </div>
                </main>
        </AdminLayout>
    )
}

export default Users