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
  width: 100%;
  transform: rotate(90deg);
}
</style>
