// cataas API: https://cataas.com/doc.html

export async function fetchFamiliars() {
  const res = await fetch('https://cataas.com/api/cats');
  const data = await res.json();
  console.log('data from fetch:', data);
  return data;
}