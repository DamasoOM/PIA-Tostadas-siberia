$(document).ready(function() {
    // Inicializar Supabase
    const SUPABASE_URL = 'https://xyzcompany.supabase.co'; // Reemplaza con tu URL de Supabase
    const SUPABASE_KEY = 'public-anon-key'; // Reemplaza con tu clave de Supabase
    const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    // Funciones para la gestión de pedidos
    async function loadOrders() {
        const { data: orders, error } = await supabase
            .from('orders')
            .select(`id, user_id, createduser_at, note, status, user:users(full_name)`);

        if (error) {
            console.error('Error fetching orders:', error);
            return;
        }

        const ordersTableBody = $('#ordersTableBody');
        ordersTableBody.empty();

        orders.forEach(order => {
            const row = `
                <tr>
                    <td>
                        <button class="btn btn-sm btn-warning edit-btn" data-id="${order.id}" data-status="${order.status}">✏️</button>
                    </td>
                    <td>#${order.id}</td>
                    <td>${order.user.full_name}</td>
                    <td>${new Date(order.createduser_at).toLocaleString()}</td>
                    <td>${order.status}</td>
                    <td>$${order.note.toFixed(2)}</td>
                </tr>
            `;
            ordersTableBody.append(row);
        });

        $('.edit-btn').click(function() {
            const id = $(this).data('id');
            const status = $(this).data('status');

            $('#orderId').val(id);
            $('#orderStatus').val(status);
            $('#editOrderModal').modal('show');
        });
    }

    $('#editOrderForm').submit(async function(e) {
        e.preventDefault();
        const id = $('#orderId').val();
        const status = $('#orderStatus').val();

        const { data, error } = await supabase
            .from('orders')
            .update({ status })
            .eq('id', id);

        if (error) {
            console.error('Error updating order:', error);
            return;
        }

        $('#editOrderModal').modal('hide');
        loadOrders();
    });

    loadOrders();
});
