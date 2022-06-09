<template>
  <div class="demo">
    <h1> Functional Images </h1>
    <form role="search">
      <label for="search" class="hidden-visually">Search: </label>
      <input type="text" name="search" id="search" v-model="search">
      <input type="image" class="btnImg" src="https://img.icons8.com/search" alt="Search">
    </form>

    <form role="search">
      <label for="searchIcon" class="hidden-visually">Search: </label>
      <input type="text" name="searchIcon" id="searchIcon" v-model="searchIcon">
      <button type="submit">
        <i class="fas fa-search" aria-hidden="true"></i>
        <span class="hidden-visually">Search</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      searchIcon: ""
    };
  }
};
</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

* {
  font-size: 1em;
}

.hidden-visually {
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  height: 1px;
  width: 1px;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
}

.btnImg{
  height: 1em
}

form[role=search] {
  margin: 2em 0;
}
</style>