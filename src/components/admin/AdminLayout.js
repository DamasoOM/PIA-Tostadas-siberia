import AdminNav from "./AdminNav"

const AdminLayout = ({children}) => {
    return (
        <body class="bodyAdmin1">
            <div class="container-fluid">
                <div class="row">
                    <AdminNav/>
                    {children}
                    
                </div>
            </div>

            
            {/* <div class="modal fade" id="editOrderModal" tabindex="-1" aria-labelledby="editOrderModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editOrderModalLabel">Editar Pedido</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="editOrderForm">
                                <div class="form-group">
                                    <label for="order-id">No. Pedido</label>
                                    <input type="text" class="form-control" id="order-id" readonly/>
                                </div>
                                <div class="form-group">
                                    <label for="client-name">Cliente</label>
                                    <input type="text" class="form-control" id="client-name"/>
                                </div>
                                <div class="form-group">
                                    <label for="order-date">Fecha / Hora</label>
                                    <input type="text" class="form-control" id="order-date"/>
                                </div>
                                <div class="form-group">
                                    <label for="order-status">Estado</label>
                                    <select class="form-control" id="order-status">
                                        <option>PENDIENTE</option>
                                        <option>COMPLETADO</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="order-profit">Ganancia</label>
                                    <input type="text" class="form-control" id="order-profit"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" id="save-order-btn">Guardar cambios</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
            <script src="https://unpkg.com/feather-icons"></script>
            <script src="jsadmin/Script1.js"></script>
        </body>
    )
}

export default AdminLayout