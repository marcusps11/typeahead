import axios from 'axios';
const API_KEY='555b9879';
const API_URL ='http://www.omdbapi.com/?'


const httpService = {

  getFilmData: function(query) {
    return axios.get(`${API_URL}s=${query}&apikey=${API_KEY}`)
      .then(response => response)
      .catch(err => err);
  },

  getFilmById: function(query) {
    return axios.get(`${API_URL}i=${query}&apikey=${API_KEY}`)
    .then(response => response)
    .catch(err => err);
  }

}
export default httpService;
