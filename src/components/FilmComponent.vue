<template>
  <div>
    <h1>{{ store.filmsArray }}</h1>
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
};
</script>

<style lang="scss" scoped></style>
