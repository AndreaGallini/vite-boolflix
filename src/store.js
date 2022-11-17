import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    filmsArray: [],
    seriesArray: [],
    search: "",
    FilmAPI: 'https://api.themoviedb.org/3/search/movie?api_key=2864f4e774d10cd35912c94239b416a8&query=',
    SeriesAPI:'https://api.themoviedb.org/3/search/tv?api_key=2864f4e774d10cd35912c94239b416a8&query=',
    flagAPI: 'https://countryflagsapi.com/',
    






    getFIlm() {
        axios.get(this.FilmAPI+this.search).then((res) => {
           // console.log(res.data.results)
            this.filmsArray = [...res.data.results]
            console.log(this.filmsArray)
    })
    },
        getSeries() {
        axios.get(this.SeriesAPI+this.search).then((res) => {
           // console.log(res.data.results)
            this.seriesArray = [...res.data.results]
            console.log(this.seriesArray)
    })
    },


});