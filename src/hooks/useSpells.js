import { useEffect, useState } from 'react';
import { fetchSpells } from '../services/spells';

export function useSpells(id) {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSpells();
        setSpells(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console.error(e);
      }
    };
    fetchData();
  }, [id]);
  return { spells, loading };
}
