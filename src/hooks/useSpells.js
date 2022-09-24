import { useEffect, useState } from 'react';
import { fetchSpells } from '../services/spells';

export function useSpells() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSpells();
        setSpells(data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console.error(e);
      }
    };
    fetchData();
  }, []);
  return { spells, loading };
}
