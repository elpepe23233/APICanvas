

const url= 'http://localhost:8000/api/empleados/search'
axios.post(url, {})
.then(respuesta => {
    const empleados = respuesta.data.data; 
    console.log(respuesta.data)
    const empresas={};
    const tablaempleados = document.getElementById('empleadosTable').getElementsByTagName('tbody')[0];
    empleados.forEach(empleado => {
        const fila = tablaempleados.insertRow();
        fila.insertCell(0).textContent = empleado.id;
        fila.insertCell(1).textContent = empleado.nombres;
        fila.insertCell(2).textContent = empleado.apellidos;
        fila.insertCell(3).textContent = empleado.edad;
        fila.insertCell(4).textContent = empleado.direccion;
        fila.insertCell(5).textContent = empleado.idempresa;
        

        const idEmpresa= empleado.idempresa;
        if(!empresas[idEmpresa]){
            empresas [idEmpresa]=0; 
        }
        empresas[idEmpresa] ++;
})

const etiqueta= Object.keys(empresas).map(empresa => empresa) 
const cantidades = Object.values(empresas);

const ctx = document.getElementById('empleadosChart').getContext('2d');
const empleadosChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: etiqueta,
        datasets: [{
        label: 'etiquetas',
        data:cantidades,
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'

    ],
    borderColor: [
        'rgba(75, 192, 192, 1)',
    ],
    borderWidth: 1
    }],      
},
options : {
    scales: {
        y: {
            beginAtZero: true
        }
    }   
}
}) 
})
.catch(error => {
    console.error('Error al obtener los empleados:', error);
});