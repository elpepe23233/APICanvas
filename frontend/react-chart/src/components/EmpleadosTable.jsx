import React from "react";
function EmpleadosTable({ data }) {
  return (
    <center>
    <table>
      <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>dirección</th>
            <th>ID Empresa</th>
        </tr>
      </thead>
      <tbody>
        {data.map((empleado) => (
          <tr key={empleado.id}>
            <td>{empleado.id}</td>
            <td>{empleado.nombres}</td>
            <td>{empleado.apellidos}</td>
            <td>{empleado.edad}</td>
            <td>{empleado.direccion}</td>
            <td>{empleado.idempresa}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </center>
  );
}
export default EmpleadosTable;
