const url = require('url')
const image = require('./image')
const svgExt = /\.svg$/;
const pngExt = /\.png$/;

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
  if (query.type === 'svg' || svgExt.test(pathname)) {
    res.setHeader('Content-Type', 'image/svg+xml')
    return image.generateSVG(pathname.replace(svgExt, ''));
  }
  res.setHeader('Content-Type', 'image/png')
  return image.generatePNG(pathname.replace(pngExt, ''), query.size)
}
