import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    filmsArray:[],







    getFIlm() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=2864f4e774d10cd35912c94239b416a8&query=a').then((res) => {
            console.log(res.data.results)
            this.filmsArray = [...res.data.results]
            console.log(this.filmsArray.title)
    })
    }
});