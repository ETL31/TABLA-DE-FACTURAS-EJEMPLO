// Datos de ejemplo para simular facturas
const facturas = [
    { fecha: '2023-01-01', descripcion: 'Compra de productos', monto: 150.00 },
    { fecha: '2023-02-15', descripcion: 'Servicios de mantenimiento', monto: 200.00 },
    { fecha: '2023-03-10', descripcion: 'Pago de alquiler', monto: 500.00 },
    { fecha: '2023-04-22', descripcion: 'Compra de equipos', monto: 800.00 },
    { fecha: '2023-05-05', descripcion: 'Servicios de consultoría', monto: 300.00 }
];

document.addEventListener('DOMContentLoaded', function () {
    cargarFacturas(); // Cargar facturas al cargar la página

    document.getElementById('filtrarButton').addEventListener('click', function () {
        filtrarFacturas();
    });
});

function cargarFacturas() {
    const tablaFacturas = document.getElementById('tablaFacturas');

    facturas.forEach(factura => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${factura.fecha}</td>
            <td>${factura.descripcion}</td>
            <td>${factura.monto}</td>
        `;
        tablaFacturas.appendChild(fila);
    });
}

function filtrarFacturas() {
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    const filtro = document.getElementById('filtro').value.toLowerCase();

    const tablaFacturas = document.getElementById('tablaFacturas');
    tablaFacturas.innerHTML = ''; // Limpiar la tabla

    facturas.forEach(factura => {
        if (
            (fechaInicio === '' || factura.fecha >= fechaInicio) &&
            (fechaFin === '' || factura.fecha <= fechaFin) &&
            (filtroTexto === '' || factura.descripcion.toLowerCase().includes(filtro))
        ) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${factura.fecha}</td>
                <td>${factura.descripcion}</td>
                <td>${factura.monto}</td>
            `;
            tablaFacturas.appendChild(fila);
        }
    });
}
