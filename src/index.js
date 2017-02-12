const url = require('url')
const image = require('./image')

module.exports = (req, res) => {
  let {pathname, query} = url.parse(req.url, true)

  if (pathname === '/favicon.ico') {
    return ''
  }
  if (pathname === '/') {
    pathname = Math.random().toString()
  } else {
    res.setHeader('Cache-Control', 'max-age=2592000, public')
  }
  if (query.type === 'svg') {
    res.setHeader('Content-Type', 'svg+xml')
  } else {
    res.setHeader('Content-Type', 'image/png')
  }

  if (query.type === 'svg') {
    return image.generateSVG(pathname)
  }

  return image.generatePNG(pathname, query.size)
}
