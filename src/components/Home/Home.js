import './Home.css';

export default function Home() {
  return (
    <div>
      <h1>Encyclopedia of Spells</h1>
      <img src={`${process.env.PUBLIC_URL}/spellpile.jpeg`}></img>
    </div>
  );
}
