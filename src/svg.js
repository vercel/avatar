module.exports = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="$WIDTH" height="$HEIGHT" viewBox="0 0 $WIDTH $HEIGHT" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g>
    <defs>
      <linearGradient id="avatar" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="$FIRST"/>
        <stop offset="100%" stop-color="$SECOND"/>
      </linearGradient>
    </defs>
    <rect fill="url(#avatar)" x="0" y="0" width="$WIDTH" height="$HEIGHT"/>
    <text x="50%" y="52.5%" alignment-baseline="middle" text-anchor="middle" fill="#fff" font-family="sans-serif" font-size="$FONTSIZE">$TEXT</text>
  </g>
</svg>
`
