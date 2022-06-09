<template>
<div id="v-model-select-dynamic" class="demo">
  <select v-model="selected">
    <option v-for="(option, index) in options" :value="option.value" :key="index">
      {{ option.text }}
    </option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
</template>

<script>

export default {
  data() {
    return {
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    };
  },
};
</script>

<style>
</style>