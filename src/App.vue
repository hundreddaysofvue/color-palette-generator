<template>
  <div class="container">
    <h1>Color Palette Generator</h1>
    <h2>Click on any color and choose the palette you want!</h2>
    <Wheel></Wheel>
  </div>
</template>

<script>
import Wheel from './components/Wheel.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    Wheel
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
