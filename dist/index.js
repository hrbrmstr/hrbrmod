import * as t from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";
const n = "this is a string", o = "`sup 🌎?";
function s() {
  return "WAT";
}
function i(r) {
  return t.plot({
    marks: [
      t.text(r, { x: 10, y: 10, text: "WAT" })
    ]
  });
}
export {
  i as SpecialPlot,
  n as this_is_a_string,
  o as veryImportantValue,
  s as wat
};
