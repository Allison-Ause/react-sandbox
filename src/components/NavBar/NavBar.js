import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Spells">Spell Compendium</Link>
      <Link to="/Familiars">Familiars Menagerie</Link>
      <Link to="/create">Create Post</Link>
    </nav>
  );
}
