<template>
  <div class="my-flex container">
    <div v-for="(serie, index) in store.seriesArray" :key="index" class="card">
      <img
        v-if="serie.poster_path"
        :src="
          getImagePath(`https://image.tmdb.org/t/p/w342/${serie.poster_path}`)
        "
        :alt="serie.name"
        class="img-logo"
      />
      <img v-else src="/img/noImg.jpg" alt="No img Avaible" />

      <div>
        <h2>{{ serie.name }}</h2>
        <p>{{ serie.original_name }}</p>
        <p>{{ serie.original_language }}</p>
        <img
          class="flag"
          :src="store.getFlag(serie.original_language)"
          alt=""
        />
        <p>{{ serie.vote_average }}</p>
        <span>
          <i
            class="fa-solid fa-star"
            v-for="star in Math.round(serie.vote_average / 2)"
          ></i>
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
      starArray: [],
    };
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
  computed: {
    getStars() {
      this.starArray = store.seriesArray;
      console.log(this.starArray);
      //return Math.ceil(parseInt(this.starArray.vote_average) / 2);
      let voto = this.starArray.vote_average;
      console.log(voto);
    },
  },
};
</script>

<style lang="scss" scoped>
.flag {
  width: 30px;
}

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
.img-logo {
  height: 500px;
}
</style>
