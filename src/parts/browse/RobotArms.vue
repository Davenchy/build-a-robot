<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(arm, idx) in arms" :key="idx">
      <h4>{{arm.title}}</h4>
      <div>{{arm.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RobotArms',
  computed: {
    store() {
      return this.$store.state.parts;
    },
    arms() {
      return this.store.arms;
    },
  },
};
</script>
