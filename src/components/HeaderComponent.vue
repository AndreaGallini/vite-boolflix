<template>
  <div class="headerFLex">
    <h1>Boolflix</h1>
    <div>
      <input
        type="text"
        placeholder="Cerca il tuo film"
        v-model="store.search"
      />
      <button
        @click="
          store.getFIlm();
          store.getSeries();
        "
      >
        Cerca
      </button>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.headerFLex {
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
}
</style>
