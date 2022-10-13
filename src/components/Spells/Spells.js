import { useState } from 'react';
import { useSpells } from '../../hooks/useSpells';
import SpellsList from '../SpellsList/SpellsList';
import './Spells.css';

export default function Spells(id) {
  const { spells, setSpells, loading, filteredByType } = useSpells(id);
  const [selectedType, setSelectedType] = useState('');

  if (loading) return <span className="loader-div"></span>;

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
  const typeArray = spells.reduce(
    (acc, curr) => (acc.includes(curr.type) ? acc : [...acc, curr.type]),
    []
  );

  const handleSelect = async () => {
    //change the value of type using setSelectedType(e.target.value)
    //const filteredSpells = filteredByType(selectedType)
    //setSpells(filteredSpells);
  };

  return (
    <div className="home">
      <h2>Hello There!</h2>
      <div>
        <h3>Find Just the Right Spell:</h3>
        <select onChange={handleSelect}>
          Spell Type:
          <option value="Any">Any</option>
          {typeArray.map((type) => (
            <option key={type} value={selectedType}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="spells-container">
        <h3>Spells List:</h3>
        <SpellsList spells={spells} />
      </div>
    </div>
  );
}
