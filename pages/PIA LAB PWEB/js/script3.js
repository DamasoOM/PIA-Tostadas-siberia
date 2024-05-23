$(document).ready(function() {
    $('#addAddressBtn').click(function() {
        $('#addressForm').slideDown();
    });

    $('#cancelAddressBtn').click(function() {
        $('#addressForm').slideUp();
    });

    $('#saveAddressBtn').click(function() {
        var alias = $('#alias').val();
        var street = $('#street').val();
        var betweenStreets = $('#betweenStreets').val();
        var exteriorNumber = $('#exteriorNumber').val();
        var interiorNumber = $('#interiorNumber').val();
        var neighborhood = $('#neighborhood').val();
        var municipality = $('#municipality').val();
        var state = $('#state').val();
        var postalCode = $('#postalCode').val();
        var deliveryReferences = $('#deliveryReferences').val();

        if(alias && street && municipality && state && postalCode) {
            var newAddress = '<li class="list-group-item">' +
                                '<span>' + alias + '</span>' +
                                '<button class="btn btn-sm btn-warning edit-btn">✏️</button>' +
                                '<button class="btn btn-sm btn-danger delete-btn">🗑️</button>' +
                             '</li>';
            $('#addressList').append(newAddress);
            $('#addressForm').slideUp();
            $('#addressFormDetails')[0].reset();
        } else {
            alert("Por favor, completa todos los campos requeridos.");
        }
    });

    $(document).on('click', '.delete-btn', function() {
        $(this).closest('li').remove();
    });

    $(document).on('click', '.edit-btn', function() {
        var li = $(this).closest('li');
        var alias = li.find('span').text();
        // Aquí puedes agregar la lógica para mostrar el formulario de edición con los valores actuales
        alert("Función de editar aún no implementada.");
    });
});

