import { Link } from 'react-router-dom';
import SpellCard from '../SpellCard/SpellCard';
import './SpellsList.css';

export default function SpellsList({ spells }) {
  return (
    <div className="spells-container">
      {spells.map((spell) => (
        <div key={spell.id}>
          <SpellCard key={spell.id} {...spell} />
          <Link key={spell.id} to={`/spells/${spell.id}`}></Link>
        </div>
      ))}
    </div>
  );
}
