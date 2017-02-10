const crypto = require('crypto')
const url = require('url')

const sharp = require('sharp')
const Color = require('color')

const svg = require('./svg')
const helper = require('./helper')

module.exports = (req, res) => {
  let {pathname, query} = url.parse(req.url, true)
  let imageSize = 120
  const maxSize = 1000

  if (pathname === '/favicon.ico') {
    return ''
  }
  if (pathname === '/random') {
    pathname = Math.random().toString()
  } else {
    res.setHeader('Cache-Control', 'max-age=2592000, public')
  }
  if (query.type === 'svg') {
    res.setHeader('Content-Type', 'svg+xml')
  } else {
    res.setHeader('Content-Type', 'image/png')
  }

  const hash = crypto.createHash('md5').update(pathname).digest('hex')

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

  if (query.type === 'svg') {
    return avatar
  }

  if (query.size && query.size.match(/^-?\d+$/) && query.size <= maxSize) {
    imageSize = parseInt(query.size, 10)
  }

  const png = sharp(new Buffer(avatar)).resize(imageSize, imageSize).png()
  return png
}
