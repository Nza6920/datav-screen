<template>
  <div class="home">
    <my-container :options="{ width: 3140, height: 2160}">
      <div class="test">lol</div>
    </my-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  mounted() {
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
  .test {
    font-size: 110px;
    color: red;
    transform: scale(1, 1);
  }
</style>
