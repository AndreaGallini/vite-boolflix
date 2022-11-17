<template>
  <div class="main">
    <h2 v-if="store.search === ''">Most Popular Films</h2>
    <h2 v-else>Your searched Films</h2>
    <div v-if="store.loading">
      <div id="loading_screen">
        <h1>Stiamo cercando i tuoi titoli ...</h1>
        <p>Resta connesso e non cambiare sito!</p>
      </div>
    </div>
    <FilmComponent v-if="!store.loading" />
    <h2 v-if="store.search === ''">Most Popular Series</h2>
    <h2 v-else>Your searched Series</h2>
    <SeriesComponent />
  </div>
</template>

<script>
import { store } from "../store";
import FilmComponent from "./FilmComponent.vue";
import SeriesComponent from "./SeriesComponent.vue";
export default {
  data() {
    return {
      store,
    };
  },
  created() {
    store.getPopular();
    store.getPopularTv();
  },
  components: { FilmComponent, SeriesComponent },
};
</script>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.main {
  min-height: 400px;
}
h2 {
  color: $redNetflix;
}
#loading_screen {
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
  padding: 80px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}
</style>
