<template>
  <section>
    <div class="color" v-for="(index, el) in elements" @click="getColor(index)"></div>
    <article>
      <div class="palette-color" v-for="color in palette"
                                 :style="{backgroundColor: `#${color}`}">
    </article>
  </section>
</template>

<script>
import RGB2HSL from '../utils/RGBtoHSL'
import ColorScheme from 'color-scheme'

export default {
  data () {
    return {
      elements: [...Array(360).keys()],
      selectedColor: ''
    }
  },
  methods: {
    getColor (i) {
      let color = this.$el.childNodes[i] // NEAT-O!!
      this.selectedColor = window.getComputedStyle(color, null)["background-color"]
    }
  },
  computed: {
    palette: {
      get () {
        let p = []
        if (this.selectedColor) {
          let [R, G, B] = this.selectedColor.match(/(\d+)/g)
          let cs = new ColorScheme
          cs.from_hue(Math.round(RGB2HSL(R, G, B)[0] * 255)).scheme('contrast').variation('hard')
          p = cs.colors()
        }
        return p
      },
      set () {} // Computed property setter necessary
    }
  }
}
</script>

<style lang="scss" scoped>
$width: 4;

section {
  white-space: nowrap;
  font-size: 0;
  position: fixed;
  top: 15%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}

.color {
  display: inline-block;
  width: #{$width}px;
  height: 200px;
  transform-origin: bottom; // OMG, what a trick!!! :O
  @for $i from 1 through 360 {
    &:nth-child(#{$i}) {
      transform: translate(-#{$i*$width}px) rotate(#{$i}deg);
      background: hsl($i, 100%, 50%);
    }
  }
}

.palette-color {
  display: inline-block;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
}

</style>

