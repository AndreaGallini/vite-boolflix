<template>
  <div class="my-flex container">
    <div v-for="(film, index) in store.filmsArray" :key="index">
      <img
        v-if="film.poster_path"
        :src="
          getImagePath(`https://image.tmdb.org/t/p/w342/${film.poster_path}`)
        "
        :alt="film.title"
      />
      <img v-else src="/img/noImg.jpg" alt="No img Avaible" />
      <div>
        <h2>{{ film.title }}</h2>
        <p>{{ film.original_title }}</p>
        <p>{{ film.original_language }}</p>
        <p>{{ film.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      show: true,
    };
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
    getStars() {
      return Math.ceil(this.film.vote_average / 2);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-flex {
  display: flex;
}
.container {
  overflow-x: scroll;
}
</style>
