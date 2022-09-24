import './Home.css';
import { useSpells } from '../../hooks/useSpells';
import SpellsList from '../SpellsList/SpellsList';
// import background from '../../background.jpg';

export default function Home() {
  const { spells, loading } = useSpells();
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
