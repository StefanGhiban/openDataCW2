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
  let getUniData = await axios.get(`http://localhost:5000/universities/l/${location}`);
  return getUniData.data;
}

export async function getSearchedUni(univ) {
  let getUniData = await axios.get(`http://localhost:5000/universities/u/${univ}`);
  return getUniData.data;
}

export async function getUni(id) {
  let getUniData = await axios.get(`http://localhost:5000/universities/${id}`);
  return getUniData.data;
}

// export async function getCity(name) {
//   let query = name + ", United Kingdom"

//   let getCityData = await axios.get(`http://localhost:5000/cities/l/${query}`);
//   return getCityData.data;
// }


export async function saveSearch(search) {
  let searchBody = {
    query: search
  }
  let saveSearchData = await axios.post('http://localhost:5000/searches/add', searchBody);
  return saveSearchData.data;
}

export async function getCityNumbeo(name) {
  let query = name + ", United Kingdom"

  let getCityData = await axios.get("https://www.numbeo.com/api/city_prices", {params: {
    api_key: "e77cv9twst4ni2",
    query: query
  }});
  return getCityData.data;
}
