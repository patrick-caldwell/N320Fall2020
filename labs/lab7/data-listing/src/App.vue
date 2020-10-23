<template>
  <div id="app">
    <div class="pageTitle">
      <h1>Part of my N64 Game Collection</h1>
      <h4>Because I don't know what else to use</h4>
    </div>
    <DataDisplay v-bind:games="this.games" />
  </div>
</template>

<script>
import DataDisplay from './components/DataDisplay.vue'

export default {
  name: 'App',
  data: function(){
    return {
      games: null,
    };
  },
  components: {
    DataDisplay
  },
  mounted: function(){
    fetch("data/data.json")
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
      this.games = jsonData;
    });
  },
};
</script>

<style>
  body {
    background-color: #404552;
  }

  #app{
    color: white;
    font-family: sans-serif;
  }

  .pageTitle{
    margin-left: 50px;
  }
</style>
