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
h1 {
  color: $redNetflix;
}
input {
  width: 200px;
  height: 30px;
  border-radius: 20px;
  border: 0px;
}
button {
  color: $background;
  background-color: $redNetflix;
  border: 0;
  height: 30px;
  width: 50px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    color: white;
  }
}
</style>
