<template>
  <div>
    <HeaderComponent />
    <MainComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import { store } from "./store";

export default {
  components: {
    HeaderComponent,
    MainComponent,
    store,
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
