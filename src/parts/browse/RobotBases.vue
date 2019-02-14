<template>
  <div>
    <h2>Bases</h2>
    The Base is critical to the mobility of your robot. Be
    sure to choose a base that will work well with the terrain
    where your robot needs to operate.
    <div v-for="(base, idx) in bases" :key="idx">
      <h4>{{base.title}}</h4>
      <div>{{base.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RobotBases',
  computed: {
    store() {
      return this.$store.state.parts;
    },
    bases() {
      return this.store.bases;
    },
  },
};
</script>
