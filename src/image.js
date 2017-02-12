const crypto = require('crypto')

const sharp = require('sharp')
const Color = require('color')

const svg = require('./svg')
const helper = require('./helper')

function generateGradient(username) {
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

  return avatar
}

exports.generateSVG = function (username) {
  return generateGradient(username)
}

exports.generatePNG = function (username, size) {
  size = size || '120'
  const maxSize = 1000
  if (size && size.match(/^-?\d+$/) && size <= maxSize) {
    size = parseInt(size, 10)
  }
  const svg = generateGradient(username)
  return sharp(new Buffer(svg)).resize(size, size).png()
}
