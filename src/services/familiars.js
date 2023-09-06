
export async function fetchFamiliars() {
  const res = await fetch(`/api/cats?tags=tag1,tag2&skip=0&limit=25`);
  const data = await res.json();
  return data;
}