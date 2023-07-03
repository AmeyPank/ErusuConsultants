import axios from 'axios';




export const getPlacesData = async (type, southwest, northeast) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

      params: {
        bl_latitude: southwest.lat,
        tr_latitude: northeast.lat,
        bl_longitude: southwest.lng,
        tr_longitude: northeast.lng,
      },
      headers: {
        'X-RapidAPI-Key': 'd51bc853a3mshf2e680dae573783p1b1b31jsn5d3ccf853b6fs',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;
  }
  catch (err) {
    console.log(err);
  }
}
