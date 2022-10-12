import { useSpells } from '../../hooks/useSpells';
import SpellsList from '../SpellsList/SpellsList';
import './Spells.css';

export default function Spells(id) {
  const { spells, loading } = useSpells(id);
  console.log('spells', spells);

  // ForEach Logic APPROACH:
  // let typeArray = [];
  // spells.forEach((spell) => {
  //   if (!typeArray.includes(spell.type)) return typeArray.push(spell.type);
  // });

  // REDUCER APPROACH
  const typeArray = spells.reduce(
    (acc, curr) => (acc.includes(curr.type) ? acc : [...acc, curr.type]),
    []
  );
  // SET APPROACH
  // const spellsArr = spells.map((spell) => spell.type);
  // const typeArray = [...new Set(spellsArr)];
  console.log('typeArray', typeArray);

  if (loading) return <span className="loader-div"></span>;

  return (
    <div className="home">
      <h2>Hello There!</h2>
      <div>
        <h3>Find Just the Right Spell:</h3>
        {/* <select>
          Spell Type:
          <option value="Any">Any</option>
          {spells.map((spell) => (
            <option key={spell.id} value={spell.type}>
              {spell.type}
            </option>
          ))}
        </select> */}
        <select>
          Spell Type:
          <option value="Any">Any</option>
          {typeArray.map((type) => (
            <option key={type} value={type}>
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
