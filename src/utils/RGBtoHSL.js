const RGB2HSL = function (R, G, B) {
  let Rnum = (R / 255)
  let Gnum = (G / 255)
  let Bnum = (B / 255)

  let H = 0
  let S = 0
  let L = 0

  let min = Math.min(Rnum, Gnum, Bnum)
  let max = Math.max(Rnum, Gnum, Bnum)

  let delta = max - min

  L = (max + min) / 2

  if (delta) {
    S = (L < 0.5)
      ? delta / (min + max)
      : delta / (2 - min - max)

    let deltaR = (((max - Rnum) / 6) + (delta / 2)) / delta
    let deltaG = (((max - Gnum) / 6) + (delta / 2)) / delta
    let deltaB = (((max - Bnum) / 6) + (delta / 2)) / delta

    if (Rnum == max) {
      H = deltaB - deltaG
    } else if (Gnum == max) {
      H = (1/3) + deltaR - deltaB
    } else if (Bnum == max) {
      H = (2/3) + deltaG - deltaR
    }

    if (H < 0) H += 1
    if (H > 1) H -= 1
  }
  return [H, S, L]
}

module.exports = RGB2HSL
