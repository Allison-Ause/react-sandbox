import { useSpells } from '../../hooks/useSpells';
import SpellsList from '../SpellsList/SpellsList';
import './Spells.css';

export default function Spells() {
  const { spells, selectedType, setSelectedType, loading, types } = useSpells();

  if (loading) return <span className="loader-div"></span>;

  return (
    <div className="home">
      <h2>Hello There!</h2>
      <div>
        <h3>Find Just the Right Spell:</h3>
        <select
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
          }}
        >
          Spell Type:
          <option value="Any">Any</option>
          {types.map((type) => (
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
