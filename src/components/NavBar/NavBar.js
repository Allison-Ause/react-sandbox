import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <h2>Navigation:</h2>
      <Link to="/">Spell Compendium</Link>
      <br></br>
      <Link to="/create">Create Post</Link>
    </div>
  );
}
