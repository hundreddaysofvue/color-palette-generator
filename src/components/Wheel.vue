<template>
  <div>
    <section class="wheel">
      <div class="color"
           v-for="(color, index) in colors"
           :style="{backgroundColor: `#${color}`}"
           @click="hue = index">
      </div>
    </section>
    <section class="selected">
      <article class="palette" v-for="color in palette">
        <span class="palette-color" :style="{backgroundColor:
        `#${color}`}"></span><br>
        <span class="palette-legend">{{ '#' + color }}</span>
      </article>
    </section>
  </div>
</template>

<script>
import ColorScheme from 'color-scheme'

const CS = new ColorScheme

export default {
  name: 'Wheel',
  data () {
    return {
      colors: [],
      hue: -1
    }
  },
  computed: {
    palette: {
      get () {
        if (this.hue >= 0) {
          CS.from_hue(this.hue).scheme('contrast').variation('hard')
        }
        return (this.hue >= 0)
          ? CS.colors()
          : ['ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff']
      },
      set () {} // Computed property setter necessary
    }
  },
  created () {
    this.colors = [...Array(360).keys()].map((i) => {
      CS.from_hue(i)
      return CS.colors()[0]
    })
  }
}
</script>

<style lang="scss" scoped>
$width: 2;

span {
  display: block;
}

.wheel {
  white-space: nowrap;
  position: relative;
  top: 20%;
  font-size: 0;
}

.color {
  display: inline-block;
  width: #{$width}px;
  height: 200px;
  cursor: pointer;
}

.palette {
  display: inline-block;
  text-align: center;
  margin: 1rem;
}

.palette-color {
  width: 3rem;
  height: 3rem;
  margin-left: 12px;
  border: 2px solid white;
  border-radius: 50%;
}
</style>

