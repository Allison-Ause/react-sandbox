// export async function fetchAllSpells() {
//   const res = await fetch('https://wizard-world-api.herokuapp.com/');
//   const data = await res.json();
//   return data;
// }

export async function fetchSpellsByType(selectedType) {
  const params = new URLSearchParams();
  if (selectedType !== 'Any') params.set('Type', selectedType);
  const res = await fetch(`https://wizard-world-api.herokuapp.com/Spells?${params.toString()}`);
  const data = await res.json();
  console.log('spells from api:', data);
  return data;
}
