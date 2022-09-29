import { Link } from 'react-router-dom';
import SpellCard from '../SpellCard/SpellCard';

export default function SpellsList({ spells }) {
  return (
    <div>
      {spells.map((spell) => (
        <div key={spell.id}>
          <SpellCard key={spell.id} {...spell} />
          <Link key={spell.id} to={`/spells/${spell.id}`}></Link>
        </div>
      ))}
    </div>
  );
}
