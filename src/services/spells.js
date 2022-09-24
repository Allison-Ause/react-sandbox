export async function fetchSpells() {
  const res = await fetch('https://wizard-world-api.herokuapp.com/Spells');
  const data = await res.json();
  return data;
}
