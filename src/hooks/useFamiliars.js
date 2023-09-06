import { useEffect, useState } from 'react';
import { fetchFamiliars } from '../services/familiars';

export function useFamiliars() {
  const [familiars, setFamiliars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFamiliars();
         /* eslint-disable-next-line no-console */
        console.log('familiars from fetch:', data);
        setFamiliars(data);
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return { familiars };
}