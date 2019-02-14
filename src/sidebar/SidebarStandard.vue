<template>
  <div class="sidebar">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'Standard',
  props: {
    name: {
      type: String,
      default: '$$$no-name$$$',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  updated() {
    const state = this.name !== '$$$no-name$$$';
    const curState = this.$store.state.sidebar;
    if (curState !== state) this.$store.commit('setSidebarState', state);
  },
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  top: 190px;
  left: -60px;
  width: 250px;
  height: 90px;
  font-size: 25px;
  transform: rotate(90deg);
}
</style>
