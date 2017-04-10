const crypto = require('crypto')

const sharp = require('sharp')
const Color = require('color')

const svg = require('./svg')
const helper = require('./helper')

function generateGradient(username, size) {
  const hash = crypto.createHash('md5').update(username).digest('hex')

  let firstColor = helper.hashStringToColor(hash)
  firstColor = new Color(firstColor).saturate(0.5)

  const lightning = firstColor.hsl().color[2]
  if (lightning < 25) {
    firstColor = firstColor.lighten(3)
  }
  if (lightning > 25 && lightning < 40) {
    firstColor = firstColor.lighten(0.8)
  }
  if (lightning > 75) {
    firstColor = firstColor.darken(0.4)
  }

  let avatar = svg.replace('$FIRST', firstColor.hex())
  avatar = avatar.replace('$SECOND', helper.getMatchingColor(firstColor).hex())

  avatar = avatar.replace(/(\$SIZE)/g, size)

  return avatar
}

function parseSize(size) {
  if (size && size.match(/^-?\d+$/)) {
    return parseInt(size, 10)
  }
  return 120
}

exports.generateSVG = function (username, size) {
  size = parseSize(size)
  return generateGradient(username, size)
}

exports.generatePNG = function (username, size) {
  size = parseSize(size)
  const svg = generateGradient(username, size)
  return sharp(new Buffer(svg)).png()
}
