import axios from 'axios';
const API_KEY='555b9879';
const API_URL ='http://www.omdbapi.com/?s='


const httpService = {

  getFilmData: function(query) {
    return axios.get(`${API_URL}${query}&apikey=${API_KEY}`)
      .then(response => response.data)
      .catch(err => err);
  }

}
export default httpService;
