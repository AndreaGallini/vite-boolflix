<template>
  <div class="my-flex container">
    <div v-for="(serie, index) in store.seriesArray" :key="index" class="card">
      <img
        v-if="serie.poster_path"
        :src="
          getImagePath(`https://image.tmdb.org/t/p/w342/${serie.poster_path}`)
        "
        :alt="serie.name"
      />
      <img v-else src="/img/noImg.jpg" alt="No img Avaible" />

      <div>
        <h1>{{ serie.name }}</h1>
        <h2>{{ serie.original_name }}</h2>
        <h3>{{ serie.original_language }}</h3>
        <p>{{ serie.vote_average }}</p>
        <span v-for="number in 5" :key="number">
          <i class="fa-solid fa-star" v-if="getStars >= number"></i>
          <i class="fa-regular fa-star" v-else></i>
        </span>
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
    };
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
  computed: {
    //  getStars() {
    //    return Math.ceil(this.item.vote_average / 2);
    // },
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
.card {
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
img {
  height: 500px;
}
</style>
