import { useState, useEffect } from 'react';
import { fetchEmpleados } from '../services/api';
function useEmpleados() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const responseData = await fetchEmpleados();
                console.log('Datos obtenidos:', responseData);
                setData(responseData.data);

            } catch (error) {
                setError(error.message);
            }finally {
                setLoading(false);
            }
        };
        loadData();
} , []);
    return { data, loading, error };
}
export default useEmpleados;