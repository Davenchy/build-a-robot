<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>

<script>
import store from '@/data/parts';

export default {
  props: {
    partType: {
      type: String,
      required: true,
      validator(value) {
        return ['heads', 'arms', 'bases', 'torsos'].includes(value);
      },
    },
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    part() {
      const { partType, id } = this;
      return store[partType].find(part => part.id === +id);
    },
  },
};
</script>
