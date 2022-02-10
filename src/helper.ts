'use strict'

function djb2(str: string) {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i)
  }
  return hash
}

function shouldChangeColor(color: any) {
  const rgb = color.rgb().array()
  const val = 765 - (rgb[0] + rgb[1] + rgb[2])
  if (val < 250 || val > 700) {
    return true
  }
  return false
}

function hashStringToColor(str: string) {
  const hash = djb2(str)
  const r = (hash & 0xff0000) >> 16
  const g = (hash & 0x00ff00) >> 8
  const b = hash & 0x0000ff
  return (
    '#' +
    ('0' + r.toString(16)).substr(-2) +
    ('0' + g.toString(16)).substr(-2) +
    ('0' + b.toString(16)).substr(-2)
  )
}

function getMatchingColor(firstColor: any) {
  let color = firstColor
  if (color.dark()) {
    color = color.saturate(0.3).rotate(90)
  } else {
    color = color.desaturate(0.3).rotate(90)
  }
  if (shouldChangeColor(color)) {
    color = color.rotate(-200).saturate(0.5)
  }
  return color
}

export {
  getMatchingColor,
  hashStringToColor,
  shouldChangeColor
}
