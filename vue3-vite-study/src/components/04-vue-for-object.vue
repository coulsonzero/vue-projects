<template>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { id: 0, text: "Learn JavaScript" },
        { id: 1, text: "Learn Vue" },
        { id: 2, text: "Build something awesome" },
      ],
    };
  },
};
</script>

<style>
</style>
