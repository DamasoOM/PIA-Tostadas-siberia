$(document).ready(function() {
    $('.edit-btn').on('click', function() {
        // Obtener datos del pedido del botón
        var id = $(this).data('id');
        var client = $(this).data('client');
        var date = $(this).data('date');
        var status = $(this).data('status');
        var profit = $(this).data('profit');

        // Llenar el formulario del modal con los datos del pedido
        $('#order-id').val(id);
        $('#client-name').val(client);
        $('#order-date').val(date);
        $('#order-status').val(status);
        $('#order-profit').val(profit);

        // Mostrar el modal
        $('#editOrderModal').modal('show');
    });

    $('#save-order-btn').on('click', function() {
        // Obtener los valores del formulario
        var id = $('#order-id').val();
        var client = $('#client-name').val();
        var date = $('#order-date').val();
        var status = $('#order-status').val();
        var profit = $('#order-profit').val();

        // Actualizar la fila de la tabla con los nuevos valores
        $('button[data-id="' + id + '"]').closest('tr').find('td').eq(1).text(client);
        $('button[data-id="' + id + '"]').closest('tr').find('td').eq(2).text(date);
        $('button[data-id="' + id + '"]').closest('tr').find('td').eq(3).text(status);
        $('button[data-id="' + id + '"]').closest('tr').find('td').eq(4).text(profit);

        // Ocultar el modal
        $('#editOrderModal').modal('hide');
    });
    
    feather.replace();
});

$(document).ready(function() {
    // Inicializar Supabase
    const SUPABASE_URL = 'https://xyzcompany.supabase.co'; // Reemplaza con tu URL de Supabase
    const SUPABASE_KEY = 'public-anon-key'; // Reemplaza con tu clave de Supabase
    const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    async function loadOrders() {
        // Obtener filtros
        const fromDate = $('#fromDate').val();
        const toDate = $('#toDate').val();
        const status = $('#status').val();

        // Aquí se llamará a la API para obtener los pedidos
        let { data: orders, error } = await supabase
            .from('orders')
            .select(`id, user_id, createduser_at, note, status, user:users(full_name), address:addresses(street, number, colony, city, state)`)
            .gte('createduser_at', fromDate)
            .lte('createduser_at', toDate);

        if (error) {
            console.error('Error fetching orders:', error);
            return;
        }

        if (status !== 'Todos') {
            orders = orders.filter(order => order.status === status);
        }

        let totalGanancia = 0;
        const ordersTableBody = $('#ordersTableBody');
        ordersTableBody.empty();

        orders.forEach(order => {
            totalGanancia += order.note; // Asumiendo que 'note' es el campo de ganancia
            const row = `
                <tr>
                    <td>#${order.id}</td>
                    <td>${order.user.full_name}</td>
                    <td>${new Date(order.createduser_at).toLocaleString()}</td>
                    <td>${order.status}</td>
                    <td>$${order.note.toFixed(2)}</td>
                    <td><button class="btn btn-sm btn-warning edit-btn">✏️</button></td>
                </tr>
            `;
            ordersTableBody.append(row);
        });

        $('#totalGanancia').text(`Total: $${totalGanancia.toFixed(2)} MXN`);
    }

    loadOrders();

    $('#fromDate, #toDate, #status').change(function() {
        // Llamar a la función de carga de pedidos cuando cambien los filtros
        loadOrders();
    });
});

$(document).ready(function() {
    // Inicializar Supabase
    const SUPABASE_URL = 'https://xyzcompany.supabase.co'; // Reemplaza con tu URL de Supabase
    const SUPABASE_KEY = 'public-anon-key'; // Reemplaza con tu clave de Supabase
    const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    async function loadAcquisitions() {
        console.log("Llamada a la API para obtener las adquisiciones");

        const { data: acquisitions, error } = await supabase
            .from('acquisitions')
            .select(`id, provider(name), delivery_date, details, cost`);

        if (error) {
            console.error('Error fetching acquisitions:', error);
            return;
        }

        const acquisitionsTableBody = $('#acquisitionsTableBody');
        acquisitionsTableBody.empty();

        acquisitions.forEach(acquisition => {
            const row = `
                <tr>
                    <td>#${acquisition.id}</td>
                    <td>${acquisition.provider.name}</td>
                    <td>${acquisition.delivery_date}</td>
                    <td>${acquisition.details}</td>
                    <td>$${acquisition.cost.toFixed(2)}</td>
                    <td><button class="btn btn-sm btn-warning edit-btn" data-id="${acquisition.id}">✏️</button></td>
                </tr>
            `;
            acquisitionsTableBody.append(row);
        });

        $('.edit-btn').click(function() {
            const id = $(this).data('id');
            const acquisition = acquisitions.find(acq => acq.id === id);
            $('#editAcquisitionId').val(acquisition.id);
            $('#editProvider').val(acquisition.provider.name);
            $('#editDeliveryDate').val(acquisition.delivery_date);
            $('#editDetails').val(acquisition.details);
            $('#editCost').val(acquisition.cost);
            $('#editAcquisitionModal').modal('show');
        });
    }

    $('#editAcquisitionForm').submit(async function(e) {
        e.preventDefault();
        const id = $('#editAcquisitionId').val();
        const provider = $('#editProvider').val();
        const delivery_date = $('#editDeliveryDate').val();
        const details = $('#editDetails').val();
        const cost = $('#editCost').val();

        const { data, error } = await supabase
            .from('acquisitions')
            .update({ provider, delivery_date, details, cost })
            .eq('id', id);

        if (error) {
            console.error('Error updating acquisition:', error);
            return;
        }

        $('#editAcquisitionModal').modal('hide');
        loadAcquisitions();
    });

    loadAcquisitions();
});

$(document).ready(function() {
    // Inicializar Supabase
    const SUPABASE_URL = 'https://xyzcompany.supabase.co'; // Aqui poones la  URL de Supabase
    const SUPABASE_KEY = 'public-anon-key'; // Reemplaza con la clave de Supabase
    const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    async function loadProducts() {
        console.log("Llamada a la API para obtener los productos");

        const { data: products, error } = await supabase
            .from('products')
            .select(`id, name, category, price, recipe`);

        if (error) {
            console.error('Error fetching products:', error);
            return;
        }

        const productsTableBody = $('#productsTableBody');
        productsTableBody.empty();

        products.forEach(product => {
            const row = `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>$${product.price.toFixed(2)}</td>
                    <td>${product.recipe}</td>
                    <td><button class="btn btn-sm btn-warning edit-btn" data-id="${product.id}">✏️</button></td>
                </tr>
            `;
            productsTableBody.append(row);
        });

        $('.edit-btn').click(function() {
            const id = $(this).data('id');
            const product = products.find(prod => prod.id === id);
            $('#editProductId').val(product.id);
            $('#editProductName').val(product.name);
            $('#editProductCategory').val(product.category);
            $('#editProductPrice').val(product.price);
            $('#editProductRecipe').val(product.recipe);
            $('#editProductModal').modal('show');
        });
    }

    $('#editProductForm').submit(async function(e) {
        e.preventDefault();
        const id = $('#editProductId').val();
        const name = $('#editProductName').val();
        const category = $('#editProductCategory').val();
        const price = $('#editProductPrice').val();
        const recipe = $('#editProductRecipe').val();

        const { data, error } = await supabase
            .from('products')
            .update({ name, category, price, recipe })
            .eq('id', id);

        if (error) {
            console.error('Error updating product:', error);
            return;
        }

        $('#editProductModal').modal('hide');
        loadProducts();
    });

    loadProducts();
});

