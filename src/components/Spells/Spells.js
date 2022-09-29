import { useSpells } from '../../hooks/useSpells';
import SpellsList from '../SpellsList/SpellsList';

export default function Spells(id) {
  const { spells, loading } = useSpells(id);
  if (loading) return <span className="loader"></span>;

  return (
    <div className="home">
      <h2>Hello There!</h2>
      <div className="spells-container">
        <h3>Spells List:</h3>
        <SpellsList spells={spells} />
      </div>
    </div>
  );
}
