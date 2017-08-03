const crypto = require('crypto')

const sharp = require('sharp')
const Color = require('color')

const svg = require('./svg')
const helper = require('./helper')

function generateGradient(username, text, width, height) {
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

  avatar = avatar.replace(/(\$TEXT)/g, text)
  avatar = avatar.replace(/(\$FONTSIZE)/g, (120 * 0.9) / text.length)

  avatar = avatar.replace(/(\$WIDTH)/g, width)
  avatar = avatar.replace(/(\$HEIGHT)/g, height)

  return avatar
}

function parseSize(size) {
  const maxSize = 1000
  if (size && size.match(/^-?\d+$/) && size <= maxSize) {
    return parseInt(size, 10)
  }
  return 120
}

exports.generateSVG = function(username, text, width, height) {
  width = parseSize(width)
  height = parseSize(height)
  return generateGradient(username, text, width, height)
}

exports.generatePNG = function(username, width, height) {
  width = parseSize(width)
  height = parseSize(height)
  const svg = generateGradient(username, '', width, height)
  return sharp(new Buffer(svg)).png()
}
