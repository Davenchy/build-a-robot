<template>
  <div class="header">
    <span @click="open = !open">
      <span v-if="open">&#9650;</span>
      <span v-else>&#9660;</span>
      <span>{{ title }}</span>
    </span>
    <slot v-if="open"></slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsableSection',
  props: { title: { type: String, default: 'Collapse Section' } },
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
}
</style>
