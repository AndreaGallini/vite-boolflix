<template>
  <div class="main">
    <FilmComponent />
  </div>
</template>

<script>
import { store } from "../store";
import FilmComponent from "./FilmComponent.vue";
export default {
  data() {
    return {
      store,
    };
  },
  created() {
    store.getFIlm();
  },
  components: { FilmComponent },
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 400px;
}
</style>
