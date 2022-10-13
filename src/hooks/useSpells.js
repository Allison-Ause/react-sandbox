import { useEffect, useState } from 'react';
import { fetchSpellsByType } from '../services/spells';

export function useSpells() {
  const [types, setTypes] = useState([]);
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('Any');

  // fetch Initial Spells list and generate static Types array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSpellsByType('Any');

        const typeArray = data.reduce(
          (acc, curr) => (acc.includes(curr.type) ? acc : [...acc, curr.type]),
          []
        );

        setTypes(typeArray);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console.error(e);
      }
    };
    fetchData();
  }, []);

  // Generate dynamic spells list based on change of type in dropdown menu
  useEffect(() => {
    const fetchDataByType = async () => {
      try {
        const data = await fetchSpellsByType(selectedType);
        setSpells(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console.error(e);
      }
    };
    fetchDataByType();
  }, [selectedType]);

  return { spells, loading, selectedType, setSelectedType, types };
}

// ALTERNATE TYPE ARRAY GENERATION METHODS

// ForEach LOGIC APPROACH:
// let typeArray = [];
// spells.forEach((spell) => {
//   if (!typeArray.includes(spell.type)) return typeArray.push(spell.type);
// });

// SET APPROACH
// const spellsArr = spells.map((spell) => spell.type);
// const typeArray = [...new Set(spellsArr)];

// REDUCER APPROACH
// accumulator array includes the current type, return just the accumulator; otherwise
// return a new array with the previous accumulator and the current type
