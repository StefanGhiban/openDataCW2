import axios from "axios";

export async function getCities() {
  let getUkCitiesData = await axios.get('http://localhost:5000/cities');
  return getUkCitiesData.data;
}


export async function getCityIndexes(city) {
  let getUkCityData = await axios.get('https://www.numbeo.com/api/indices', {
    params: {
      api_key: "e77cv9twst4ni2",
      query: city.city + ", United Kingdom"
    }
  });

  return getUkCityData.data;
}
