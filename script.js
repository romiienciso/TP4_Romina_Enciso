// Función para mostrar bienvenida en la Página Principal
if (document.querySelector('#boton3')) {
    document.getElementById('boton3').addEventListener('click', () => {
        const nombre = prompt('¿Cómo te llamas?');
        if (nombre && nombre.trim() !== "") {
            alert(`¡Bienvenido, ${nombre}!`);
            const bienvenida = document.getElementById('bienvenida');
            bienvenida.textContent = `¡Hola, ${nombre}! Bienvenido a nuestro sitio web.`;
            bienvenida.style.display = 'block';
        } else {
            alert('Por favor, ingresa un nombre válido.');
        }
    });
}

// Función para verificar edad en la Página 2
if (document.querySelector('#verificarEdad')) {
    document.getElementById('verificarEdad').addEventListener('click', () => {
        const edad = document.getElementById('edad').value;
        const mensaje = edad > 20 ? 'Eres mayor de 20 años' : 'Eres menor de 20 años';
        document.getElementById('mensajeEdad').textContent = mensaje;
    });
}

// Función para cálculos en la Página 3
if (document.querySelectorAll('.calcular')) {
    document.querySelectorAll('.calcular').forEach(boton => {
        boton.addEventListener('click', () => {
            const operacion = boton.dataset.op;
            let resultado;

            if (operacion === 'multiplicacion') {
                const a = prompt('Ingresa el primer número:');
                const b = prompt('Ingresa el segundo número:');
                resultado = a * b;
            } else if (operacion === 'exponente') {
                const a = prompt('Ingresa un número:');
                resultado = a ** 2;
            } else if (operacion === 'resta') {
                const a = prompt('Ingresa el primer número:');
                const b = prompt('Ingresa el segundo número:');
                resultado = a - b;
            }

            alert(`Resultado: ${resultado}`);
        });
    });
}
