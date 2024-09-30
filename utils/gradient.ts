import color from "tinycolor2";

/**
 * This algorithm was first reported by dan bernstein in comp.lang.c.
 * We use BigInt in JS which is similar to "unsigned long" in C.
 * See http://www.cse.yorku.ca/~oz/hash.html
 */
function djb2(str: string): bigint {
  let hash = 5381n;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5n) + hash + BigInt(str.charCodeAt(i));
  }
  return hash;
}

/**
 * Since the Hue (H in HSL) is between 0 and 360, we use the remainder
 * then convert it to a number since we no longer need BigInt precision.
 */
function hue(str: string): number {
  return Number(djb2(str) % 360n);
}

export function generateGradient(username: string) {
  const c1 = color({ h: hue(username), s: 0.95, l: 0.5 });
  const second = c1.triad()[1].toHexString();

  return {
    fromColor: c1.toHexString(),
    toColor: second,
  };
}
