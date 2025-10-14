import React from 'react'
import { Bar } from 'react-chartjs-2';
import { getChartData, chartOptions} from '../utils/chartConfig';
 function EmpleadosChart({ data }) {
    const chartData = getChartData(data); 
    
  return (
    <div style={{ width: '100%', height: '400px', padding: '1rem' }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
export default EmpleadosChart