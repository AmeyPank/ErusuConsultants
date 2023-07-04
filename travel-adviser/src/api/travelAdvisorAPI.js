import axios from 'axios';




export const getPlacesData = async (type, southwest, northeast) => {
  const API_KEY = process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY;
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

      params: {
        bl_latitude: southwest.lat,
        tr_latitude: northeast.lat,
        bl_longitude: southwest.lng,
        tr_longitude: northeast.lng,
      },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;
  }
  catch (err) {
    console.log(err);
  }
}
