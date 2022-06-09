<template>
  <div id="v-model-multiple-checkboxes">
    <input type="checkbox" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
  </div>
</template>

<script>

export default {
  data() {
    return {
      checkedNames: []
    };
  },
};
</script>

<style>
</style>