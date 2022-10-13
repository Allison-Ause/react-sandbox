export async function fetchSpells() {
  const res = await fetch('https://wizard-world-api.herokuapp.com/Spells');
  const data = await res.json();
  return data;
}

// https://wizard-world-api.herokuapp.com/Spells?Type=Charm
// pass
export async function fetchSpellsByType(type) {
  const res = await fetch(`https://wizard-world-api.herokuapp.com/Spells?Type=${type}`);
  const data = await res.json();
  console.log('data');
  return data;
}
