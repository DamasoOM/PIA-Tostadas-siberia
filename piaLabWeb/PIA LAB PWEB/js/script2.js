document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);

    
    if (email === "user@example.com" && password === "password123") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Correo electrónico o contraseña incorrectos");
    }
});

document.querySelector('.login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);

    
    if (email === "user@example.com" && password === "password123") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Correo electrónico o contraseña incorrectos");
    }
});

document.querySelector('.register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    
    console.log('Nombre(s):', firstname);
    console.log('Apellido(s):', lastname);
    console.log('Teléfono:', phone);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    console.log('Confirmar contraseña:', confirmPassword);

    
    if (password === confirmPassword) {
        alert("Registro exitoso");
    } else {
        alert("Las contraseñas no coinciden");
    }
});

