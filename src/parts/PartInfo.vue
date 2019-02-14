<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
    <button @click="$router.go(-1)" class="back-btn">Back</button>
  </div>
</template>

<script>
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
  created() {
    if (!this.isDataReady) this.$router.push('/');
  },
  computed: {
    store() {
      return this.$store.state.parts;
    },
    isDataReady() {
      return this.store !== null;
    },
    part() {
      const { partType, id } = this;
      return this.store[partType].find(part => part.id === +id);
    },
  },
};
</script>

<style scoped>
.back-btn {
  padding: 7px 13px;
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
}
</style>
