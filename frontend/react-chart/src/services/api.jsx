export async function fetchEmpleados() {
    const response = await fetch('http://127.0.0.1:8000/api/empleados/search', {
        method: 'POST',
        headers : {
             'Content-Type': 'application/json',
             'Accept': 'application/json',

        },
        body: JSON.stringify({ })
    });
    if (!response.ok) {
        throw new Error('Error de red, servidor no encontrado');
    }
    return response.json();
}