$(document).ready(function() {
    // Inicializar Supabase
    const SUPABASE_URL = 'https://xyzcompany.supabase.co'; // Reemplaza con tu URL de Supabase
    const SUPABASE_KEY = 'public-anon-key'; // Reemplaza con tu clave de Supabase
    const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    // Funciones para la gestión de usuarios
    async function loadUsers() {
        const { data: users, error } = await supabase
            .from('users')
            .select(`id, full_name, role:roles(name)`);

        if (error) {
            console.error('Error fetching users:', error);
            return;
        }

        const usersTableBody = $('#usersTableBody');
        usersTableBody.empty();

        users.forEach(user => {
            const row = `
                <tr>
                    <td>${user.full_name}</td>
                    <td>${user.role.name}</td>
                    <td>
                        <button class="btn btn-sm btn-warning edit-btn" data-id="${user.id}" data-name="${user.full_name}" data-role="${user.role.name}">✏️</button>
                        <button class="btn btn-sm btn-danger delete-btn" data-id="${user.id}">🗑️</button>
                    </td>
                </tr>
            `;
            usersTableBody.append(row);
        });

        $('.edit-btn').click(function() {
            const id = $(this).data('id');
            const name = $(this).data('name');
            const role = $(this).data('role');

            $('#editUserId').val(id);
            $('#editUserName').val(name);
            $('#editUserRole').val(role);
            $('#editUserModal').modal('show');
        });

        $('.delete-btn').click(async function() {
            const id = $(this).data('id');

            const { error } = await supabase
                .from('users')
                .delete()
                .eq('id', id);

            if (error) {
                console.error('Error deleting user:', error);
                return;
            }

            loadUsers();
        });
    }

    $('#editUserForm').submit(async function(e) {
        e.preventDefault();
        const id = $('#editUserId').val();
        const full_name = $('#editUserName').val();
        const role = $('#editUserRole').val();

        const { data, error } = await supabase
            .from('users')
            .update({ full_name, role_id: role })
            .eq('id', id);

        if (error) {
            console.error('Error updating user:', error);
            return;
        }

        $('#editUserModal').modal('hide');
        loadUsers();
    });

    $('#addUserBtn').click(function() {
        $('#addUserModal').modal('show');
    });

    $('#addUserForm').submit(async function(e) {
        e.preventDefault();
        const full_name = $('#addUserName').val();
        const role = $('#addUserRole').val();

        const { data, error } = await supabase
            .from('users')
            .insert([{ full_name, role_id: role }]);

        if (error) {
            console.error('Error adding user:', error);
            return;
        }

        $('#addUserModal').modal('hide');
        loadUsers();
    });

    loadUsers();
});
