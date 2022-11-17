<template>
  <div class="my-flex container" v-if="store.search === ''">
    <div
      class="card"
      v-for="(popular, index) in store.popularArray"
      :key="index"
    >
      <div class="front">
        <img
          v-if="popular.poster_path"
          :src="
            getImagePath(
              `https://image.tmdb.org/t/p/w342/${popular.poster_path}`
            )
          "
          :alt="popular.title"
          class="img-logo"
        />
        <img v-else src="/img/noImg.jpg" alt="No img Avaible" class="noImg" />
      </div>
      <div class="back">
        <h2>{{ popular.title }}</h2>
        <p>{{ popular.original_title }}</p>

        <img
          class="flag"
          :src="store.getFlag(popular.original_language)"
          alt=""
        />

        <span>
          <i
            class="fa-star"
            v-for="star in Math.round(popular.vote_average / 2)"
          ></i>
        </span>
      </div>
    </div>
  </div>
  <div class="my-flex container" v-else>
    <div class="card" v-for="(film, index) in store.filmsArray" :key="index">
      <div class="front">
        <img
          v-if="film.poster_path"
          :src="
            getImagePath(`https://image.tmdb.org/t/p/w342/${film.poster_path}`)
          "
          :alt="film.title"
          class="img-logo"
        />
        <img v-else src="/img/noImg.jpg" alt="No img Avaible" class="noImg" />
      </div>
      <div class="back">
        <h2>{{ film.title }}</h2>
        <p>{{ film.original_title }}</p>

        <img class="flag" :src="store.getFlag(film.original_language)" alt="" />

        <span>
          <i
            class="fa-solid fa-star"
            v-for="star in Math.round(film.vote_average / 2)"
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
      this.starArray = store.filmsArray;
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
  margin-top: 20px;
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
  height: 100%;
}
.noImg {
  width: 300px;
  height: 466px;
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
