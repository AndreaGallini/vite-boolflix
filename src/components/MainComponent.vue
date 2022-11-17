<template>
  <div class="main">
    <h2 v-if="store.search === ''">Most Popular Films</h2>
    <h2 v-else>Your searched Films</h2>
    <FilmComponent />
    <h2 v-if="store.search === ''">Popular series</h2>
    <h2 v-else>Your searched series</h2>

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
</style>
