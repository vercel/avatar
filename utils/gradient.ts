import color from "tinycolor2";

export function djb2(str: string) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
  }
  return hash;
}

export function generateGradient(username: string) {
  const c1 = color({ h: djb2(username) % 360, s: 0.8, l: 0.6 });
  const second = c1.triad()[1].toHexString();

  return {
    fromColor: c1.toHexString(),
    toColor: second,
  };
}

export function generateSolidColor(username: string) {
  const c = color({ h: djb2(username) % 360, s: 0.7, l: 0.65 });

  return {
    color: c.toHexString(),
  };
}
