$(document).ready(function() {
    // Inicializar Supabase
    const SUPABASE_URL = 'https://xyzcompany.supabase.co'; // Reemplaza con tu URL de Supabase
    const SUPABASE_KEY = 'public-anon-key'; // Reemplaza con tu clave de Supabase
    const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    // Funciones para la gestión de pedidos
    async function loadOrders() {
        const fromDate = $('#fromDate').val();
        const toDate = $('#toDate').val();
        const status = $('#status').val();

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
                    <td><button class="btn btn-sm btn-warning edit-btn" data-id="${order.id}" data-client="${order.user.full_name}" data-date="${new Date(order.createduser_at).toLocaleString()}" data-status="${order.status}" data-profit="${order.note.toFixed(2)}">✏️</button></td>
                </tr>
            `;
            ordersTableBody.append(row);
        });

        $('#totalGanancia').text(`Total: $${totalGanancia.toFixed(2)} MXN`);

        $('.edit-btn').click(function() {
            const id = $(this).data('id');
            const client = $(this).data('client');
            const date = $(this).data('date');
            const status = $(this).data('status');
            const profit = $(this).data('profit');

            $('#order-id').val(id);
            $('#client-name').val(client);
            $('#order-date').val(date);
            $('#order-status').val(status);
            $('#order-profit').val(profit);

            $('#editOrderModal').modal('show');
        });
    }

    $('#save-order-btn').on('click', async function() {
        const id = $('#order-id').val();
        const client = $('#client-name').val();
        const date = $('#order-date').val();
        const status = $('#order-status').val();
        const profit = $('#order-profit').val();

        const { data, error } = await supabase
            .from('orders')
            .update({ status, note: parseFloat(profit) })
            .eq('id', id);

        if (error) {
            console.error('Error updating order:', error);
            return;
        }

        loadOrders();
        $('#editOrderModal').modal('hide');
    });

    $('#fromDate, #toDate, #status').change(function() {
        loadOrders();
    });

    loadOrders();

    // Funciones para la gestión de adquisiciones
    async function loadAcquisitions() {
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

    // Funciones para la gestión de productos
    async function loadProducts() {
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

    $('#addProductBtn').click(function() {
        $('#addProductModal').modal('show');
    });

    $('#addProductForm').submit(async function(e) {
        e.preventDefault();
        const name = $('#addProductName').val();
        const category = $('#addProductCategory').val();
        const price = $('#addProductPrice').val();
        const recipe = $('#addProductRecipe').val();

        const { data, error } = await supabase
            .from('products')
            .insert([{ name, category, price, recipe }]);

        if (error) {
            console.error('Error adding product:', error);
            return;
        }

        $('#addProductModal').modal('hide');
        loadProducts();
    });

    loadProducts();

    // Funciones para la gestión de combos
    async function loadCombos() {
        const { data: combos, error } = await supabase
            .from('combos')
            .select(`id, name, details, price`);

        if (error) {
            console.error('Error fetching combos:', error);
            return;
        }

        const combosTableBody = $('#combosTableBody');
        combosTableBody.empty();

        combos.forEach(combo => {
            const row = `
                <tr>
                    <td>${combo.name}</td>
                    <td>${combo.details}</td>
                    <td>$${combo.price.toFixed(2)}</td>
                    <td><button class="btn btn-sm btn-warning edit-btn" data-id="${combo.id}">✏️</button></td>
                </tr>
            `;
            combosTableBody.append(row);
        });

        $('.edit-btn').click(function() {
            const id = $(this).data('id');
            const combo = combos.find(comb => comb.id === id);
            $('#editComboId').val(combo.id);
            $('#editComboName').val(combo.name);
            $('#editComboDetails').val(combo.details);
            $('#editComboPrice').val(combo.price);
            $('#editComboModal').modal('show');
        });
    }

    $('#editComboForm').submit(async function(e) {
        e.preventDefault();
        const id = $('#editComboId').val();
        const name = $('#editComboName').val();
        const details = $('#editComboDetails').val();
        const price = $('#editComboPrice').val();

        const { data, error } = await supabase
            .from('combos')
            .update({ name, details, price })
            .eq('id', id);

        if (error) {
            console.error('Error updating combo:', error);
            return;
        }

        $('#editComboModal').modal('hide');
        loadCombos();
    });

    $('#addComboBtn').click(function() {
        $('#addComboModal').modal('show');
    });

    $('#addComboForm').submit(async function(e) {
        e.preventDefault();
        const name = $('#addComboName').val();
        const details = $('#addComboDetails').val();
        const price = $('#addComboPrice').val();

        const { data, error } = await supabase
            .from('combos')
            .insert([{ name, details, price }]);

        if (error) {
            console.error('Error adding combo:', error);
            return;
        }

        $('#addComboModal').modal('hide');
        loadCombos();
    });

    loadCombos();

    // Funciones para la gestión de inventario
    async function loadInventory() {
        const { data: inventory, error } = await supabase
            .from('inventory')
            .select(`id, name, category, current_stock, max_stock`);

        if (error) {
            console.error('Error fetching inventory:', error);
            return;
        }

        const inventoryTableBody = $('#inventoryTableBody');
        inventoryTableBody.empty();

        inventory.forEach(item => {
            const row = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.category}</td>
                    <td>${item.current_stock}</td>
                    <td>${item.max_stock}</td>
                    <td><button class="btn btn-sm btn-warning edit-btn" data-id="${item.id}">✏️</button></td>
                </tr>
            `;
            inventoryTableBody.append(row);
        });

        $('.edit-btn').click(function() {
            const id = $(this).data('id');
            const item = inventory.find(inv => inv.id === id);
            $('#editInventoryId').val(item.id);
            $('#editInventoryName').val(item.name);
            $('#editInventoryCategory').val(item.category);
            $('#editInventoryCurrentStock').val(item.current_stock);
            $('#editInventoryMaxStock').val(item.max_stock);
            $('#editInventoryModal').modal('show');
        });
    }

    $('#editInventoryForm').submit(async function(e) {
        e.preventDefault();
        const id = $('#editInventoryId').val();
        const name = $('#editInventoryName').val();
        const category = $('#editInventoryCategory').val();
        const current_stock = $('#editInventoryCurrentStock').val();
        const max_stock = $('#editInventoryMaxStock').val();

        const { data, error } = await supabase
            .from('inventory')
            .update({ name, category, current_stock, max_stock })
            .eq('id', id);

        if (error) {
            console.error('Error updating inventory:', error);
            return;
        }

        $('#editInventoryModal').modal('hide');
        loadInventory();
    });

    $('#addInventoryBtn').click(function() {
        $('#addInventoryModal').modal('show');
    });

    $('#addInventoryForm').submit(async function(e) {
        e.preventDefault();
        const name = $('#addInventoryName').val();
        const category = $('#addInventoryCategory').val();
        const current_stock = $('#addInventoryCurrentStock').val();
        const max_stock = $('#addInventoryMaxStock').val();

        const { data, error } = await supabase
            .from('inventory')
            .insert([{ name, category, current_stock, max_stock }]);

        if (error) {
            console.error('Error adding inventory:', error);
            return;
        }

        $('#addInventoryModal').modal('hide');
        loadInventory();
    });

    loadInventory();
});
