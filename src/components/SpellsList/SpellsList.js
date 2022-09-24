import SpellCard from '../SpellCard/SpellCard';

export default function SpellsList({ spells }) {
  return (
    <div>
      {spells.map((spell) => (
        <SpellCard key={spell.id} {...spell} />
      ))}
    </div>
  );
}
