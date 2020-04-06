const baseUrl = "https://rickandmortyapi.com/api/";
export async function getDataByPopular() {
  const response = await fetch(`${baseUrl}character/`);
  const responseJson = await response.json();
  return responseJson;
}

export async function getDataBySearch(q) {
  const response = await fetch(`${baseUrl}/character/?name=${q}`);
  const responseJson = await response.json();
  return responseJson;
}

export default {
  getDataByPopular,
  getDataBySearch,
};
