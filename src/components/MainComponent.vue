<template>
  <div class="main">
    <FilmComponent />
    <h1>Serie</h1>
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
    store.getFIlm();
    store.getSeries();
  },
  components: { FilmComponent, SeriesComponent },
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 400px;
}
</style>
