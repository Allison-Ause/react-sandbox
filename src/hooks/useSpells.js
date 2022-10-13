import { useEffect, useState } from 'react';
import { fetchSpells } from '../services/spells';

export function useSpells(id) {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState('Any');

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

  // call new function fetchSpellsByType
  // pass in the type, fetch just those and return for display
  const filteredByType = () => {
    const spellsByType = spells.filter((spell) => {
      if (type === 'Any') return true;
      return spell.type === type;
    });
    return spellsByType;
  };
  return { spells, loading, filteredByType };
}
