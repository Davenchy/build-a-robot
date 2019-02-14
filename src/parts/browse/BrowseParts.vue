<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li>
        <router-link :to="{name: 'RobotHeads'}">Heads</router-link></li>
      <li>
        <router-link :to="{name: 'RobotArms'}">Arms</router-link></li>
      <li>
        <router-link :to="{name: 'RobotTorsos'}">Torsos</router-link></li>
      <li>
        <router-link :to="{name: 'RobotBases'}">Bases</router-link></li>
    </ul>
    <router-view v-if="isDataReady"/>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  name: 'BrowseParts',
  computed: {
    store() {
      return this.$store.state.parts;
    },
    isDataReady() {
      return this.store !== null;
    },
  },
};
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: palevioletred;
  }
</style>
