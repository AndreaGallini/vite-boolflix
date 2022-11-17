import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    filmsArray: [],
    popularArray:[],
    seriesArray: [],
    popularseriesArray:[],
    search: "",
    FilmAPI: 'https://api.themoviedb.org/3/search/movie?api_key=2864f4e774d10cd35912c94239b416a8&query=',
    SeriesAPI:'https://api.themoviedb.org/3/search/tv?api_key=2864f4e774d10cd35912c94239b416a8&query=',
    flagAPI: 'https://countryflagsapi.com/png/',
    popularAPI: 'https://api.themoviedb.org/3/movie/popular?api_key=2864f4e774d10cd35912c94239b416a8',
    popularTvAPI:'https://api.themoviedb.org/3/tv/popular?api_key=2864f4e774d10cd35912c94239b416a8',
    






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
    getFlag(naz) {
        naz == 'en' ? naz = 'gb' : '';
        naz == 'en' ? naz = 'gb' : '';
        let nazAPI = this.flagAPI + naz
        return nazAPI
    },
    getPopular() {
        
        axios.get(this.popularAPI).then((res) => {
           // console.log(res.data.results)
            this.popularArray = [...res.data.results]
            
            console.log(this.popularArray)
    })
    },
    getPopularTv() {
        
        axios.get(this.popularTvAPI).then((res) => {
           // console.log(res.data.results)
            this.popularseriesArray = [...res.data.results]
            
            console.log(this.popularseriesArray)
    })
    },


});