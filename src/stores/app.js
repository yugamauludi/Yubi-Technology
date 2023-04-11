import {defineStore} from 'pinia'
import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
export const useAppStore = defineStore('app', {
  state: () => ({
    movie: [],
    detailMovie: {},
  }),
  actions: {
    fetchDataMovie() {
      axios({
        method: "GET",
        url: `${BASE_URL}/movie/popular`,
        params: {
          api_key: 'a1a909cdd0e3e6c25fd388b4fd181a83'
        }
      })
      .then((res) => {
        this.movie = res.data;
        // console.log(this.movie, '<<<<<< ini data movie');
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Ooopppsss...",
          text: error.response.data.message
        });
      });
    },
    fetchDetailMovie(movieId) {
      axios({
        method: 'GET',
        url: `${BASE_URL}/movie/${movieId}`,
        params: {
          api_key: 'a1a909cdd0e3e6c25fd388b4fd181a83'
        }
      })
      .then((res) => {
        this.detailMovie = res.data
        console.log(this.detailMovie, '<<<<<detail movie');
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Ooopppsss...",
          text: error.response.data.message
        });
      })
    },
  },

  

  
})