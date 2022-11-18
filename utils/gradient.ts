import Color from "color";
import { getMatchingColor, hashStringToColor } from "./helper";

export function generateGradient(username: string) {
  let firstColor = new Color(hashStringToColor(username)).saturate(0.5);

  const lightning = firstColor.lightness();

  if (lightning < 25) {
    firstColor = firstColor.lighten(3);
  }
  if (lightning > 25 && lightning < 40) {
    firstColor = firstColor.lighten(0.8);
  }
  if (lightning > 75) {
    firstColor = firstColor.darken(0.4);
  }

  return {
    fromColor: firstColor.hex(),
    toColor: getMatchingColor(firstColor).hex(),
  };
}
