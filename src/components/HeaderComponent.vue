<template>
  <div class="headerFLex">
    <h1>Boolflix</h1>
    <div>
      <input type="text" placeholder="Cerca il tuo film" />
      <button>Cerca</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.headerFLex {
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
}
</style>
