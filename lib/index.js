import './styles.css';

import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";

export * from './strings.js'

export const veryImportantValue = "`sup 🌎?"

export function wat() {
  return "WAT"
}

export function SpecialPlot(data) {
  return Plot.plot({
    marks: [
      Plot.text(data, {x: 10, y: 10, text: "WAT"})
    ]
  })
}