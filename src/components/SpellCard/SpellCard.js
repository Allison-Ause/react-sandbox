import './SpellCard.css';
import background from '../../parchment.jpeg';

export default function SpellCard({ name, incantation, effect }) {
  //change the name to uppercase for each word
  //put in conditional for if incantation !=== null, render h3.
  return (
    <div
      className="spell-card"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
    >
      <h2>{incantation}</h2>
      <h3>{name}</h3>
      <span>{effect}</span>
    </div>
  );
}
