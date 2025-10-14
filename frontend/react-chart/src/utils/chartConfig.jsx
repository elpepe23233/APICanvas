import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function getChartData(data) {
  return {
    labels: data.map(empleado => `${empleado.nombres} ${empleado.apellidos}`),
    datasets: [
      {
        label: 'Edad de Empleados',
        data: data.map(empleado => empleado.edad),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  };
}

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Edad de Empleados por Nombre',
    },
  },
};
