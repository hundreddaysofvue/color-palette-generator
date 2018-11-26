# color-palette-generator

A desktop-only color palette generator. The palette is capable of generate
[tetradic][1] colors and its [complementaries][2], based on selected color.

This app was made for [#100DaysOfCode][3].

This project also belongs to #100DaysOfVue initiative.

## Additional used components

+ [Parcel][4] for watch and bundling files.
+ [ColorScheme][5] to rely on colorschemes calculations.

## Learned during the process

1. Color theory... God, what a [nice page][6] to learn about colors math.
2. [Vue binding object][7] syntax for `style` attribute.
3. More about CSS Positioning (*).
4. SCSS capabilities (*).

(*) My first approach was to make a color wheel with 360 saturated colors (1 per
degree) like this:

```scss
$width: 4; // Without units, so I could fit into another calculations

.color {
  display: inline-block;
  width: #{$width}px;
  height: 200px;
  transform-origin: bottom; // This got me goosebumps, really :)
  @for $i from 1 through 360 {
    &:nth-child(#{$i}) {
      transform: translate(-#{$i*$width}px) rotate(#{$i}deg); // THIS made the trick
      background: hsl($i, 100%, 50%);
    }
  }
}
```

But, I was unable to properly position the wheel since all `div.color` elements
were transformed. So, I ran out of solutions in my head. Anyways, I leave the
other component (see src/components/_Wheel.vue) if anyone can see if something
can be improved.

[1]: http://www.paletton.com/wiki/index.php?title=Tetradic_color_scheme
[2]: http://www.paletton.com/wiki/index.php?title=Complementary_color_scheme
[3]: https://www.100daysofcode.com/
[4]: https://en.parceljs.org/
[5]: https://github.com/c0bra/color-scheme-js
[6]: http://www.easyrgb.com/en/math.php
[7]: https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax-1

