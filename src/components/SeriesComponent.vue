<template>
  <div class="my-flex container" v-if="store.search === ''">
    <div
      class="card"
      v-for="(popularSeries, index) in store.popularseriesArray"
      :key="index"
    >
      <div class="front">
        <img
          v-if="popularSeries.poster_path"
          :src="
            getImagePath(
              `https://image.tmdb.org/t/p/w342/${popularSeries.poster_path}`
            )
          "
          :alt="popularSeries.name"
          class="img-logo"
        />
        <img v-else src="/img/noImg.jpg" alt="No img Avaible" class="noImg" />
      </div>
      <div class="back">
        <h2>{{ popularSeries.name }}</h2>
        <p>{{ popularSeries.original_title }}</p>

        <img
          class="flag"
          :src="store.getFlag(popularSeries.original_language)"
          alt=""
        />

        <span>
          <i
            class="fa-solid fa-star"
            v-for="star in Math.round(popularSeries.vote_average / 2)"
          ></i>
        </span>
      </div>
    </div>
  </div>
  <div class="my-flex container" v-else>
    <div class="card" v-for="(serie, index) in store.seriesArray" :key="index">
      <div class="front">
        <img
          v-if="serie.poster_path"
          :src="
            getImagePath(`https://image.tmdb.org/t/p/w342/${serie.poster_path}`)
          "
          :alt="serie.name"
          class="img-logo"
        />
        <img v-else src="/img/noImg.jpg" alt="No img Avaible" class="noImg" />
      </div>
      <div class="back">
        <h2>{{ serie.name }}</h2>
        <p>{{ serie.original_name }}</p>

        <img
          class="flag"
          :src="store.getFlag(serie.original_language)"
          alt=""
        />

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
i {
  color: white;
}
.noImg {
  width: 300px;
  height: 466px;
}
h2,
p,
img,
span {
  padding: 0.5rem 0;
}

.my-flex {
  display: flex;
}

.container {
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
  min-height: 300px;
}
.card {
  // padding: 0 2rem;
  position: relative;
  height: 500px;
  width: 500px;
  margin: 0 170px;
}
.img-logo {
  width: 100%;
}
.card .back {
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
  display: flex;
  flex-direction: column;
  width: 200px;
}
.card .front {
  position: absolute;
  transform: rotateY(0deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
  width: 300px;
}
.card:hover .back {
  transform: rotateY(0deg);
  cursor: pointer;
}
.card:hover .front {
  transform: rotateY(-180deg);
  cursor: pointer;
}
</style>
