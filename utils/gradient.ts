import color from "tinycolor2";

export function djb2(str: string) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
  }
  return hash;
}

export function generateGradient(username: string) {
  const hue = djb2(username) % 360;

  let hash2 = 7;
  for (let i = 0; i < username.length; i++) {
    hash2 = hash2 * 31 + username.charCodeAt(i);
  }
  const hue2 = Math.abs(hash2) % 360;

  const c1 = color({ h: hue, s: 0.95, l: 0.5 });
  const triadColors = c1.triad();
  const c2 = triadColors[1].spin(hue2);

  return {
    fromColor: c1.toHexString(),
    toColor: c2.toHexString(),
  };
}
