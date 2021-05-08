import axios from "axios";

export async function getCities() {
  let getUkCitiesData = await axios.get('http://localhost:5000/cities');
  return getUkCitiesData.data;
}

export async function getUnis() {
  let getUkUnisData = await axios.get('http://localhost:5000/universities');
  return getUkUnisData.data;
}

export async function getSearches() {
  let getSearchesData = await axios.get('http://localhost:5000/searches');
  return getSearchesData.data;
}

export async function getSearchedLocation(location) {
  let getUniData = await axios.get(`http://localhost:5000/universities/${location}`);
  return getUniData.data;
}

export async function getSearchedUni(univ) {
  let getUniData = await axios.get(`http://localhost:5000/universities/u/${univ}`);
  return getUniData.data;
}

export async function saveSearch(search) {
  let searchBody = {
    query: search
  }
  let saveSearchData = await axios.post('http://localhost:5000/searches/add', searchBody);
  return saveSearchData.data;
}