import './styles.css';

import * as Plot from '@observablehq/plot'

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