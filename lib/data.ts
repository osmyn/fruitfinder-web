const base = process.env.API_BASE_URL;

export async function fetchFruits() {
  const url = `${base}/fruits`;
  const response = await fetch(url);
  return await response.json();
}
