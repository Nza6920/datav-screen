<template>
  <button @click="increment">{{ doubleCount }}</button>
  <button @click="gotoAbout">ABOUT</button>
  <div></div>
  <button @click="updateNumber">UPDATE NUMBER</button>
  <div>{{ number }}</div>
  <div></div>
  <button @click="updateAA">UPDATE AA</button>
  <div>{{ aa }}</div>
</template>
<script>
/* eslint-disable */
import useTest from './useTest'

export default {
  setup () {
    const { count, increment, doubleCount, gotoAbout, number, updateNumber, aa, updateAA } = useTest()
    return {
      count,
      doubleCount,
      increment,
      gotoAbout,
      number,
      updateNumber,
      aa,
      updateAA
    }
  }
}

</script>
