import { Color } from "./color.js"


/**
 * Draws a given scanline to the canvas
 * @param {number} y Scanline Y-value, from top = 0
 * @param {Array} lineBuffer Array containing color values for the scanline
 * @param {Object} c Handle for canvas
 */
function drawScanline(y, lineBuffer, c) {
  for (let x = 0; x < lineBuffer.length; x++) {
    c.fillStyle = Color.fifteenToHex(lineBuffer[x])
    c.fillRect(3 * x, 3 * y, 3, 2)
    c.fillStyle = '#000000'
    c.fillRect(0, (3 * y) + 2, 1152, 1)
  }
}


const canvas = document.querySelector('canvas')
const c = canvas?.getContext('2d')
c?.beginPath()

// create dummy scanline
let myScanline = []
for (let x = 0; x < 384; x++) {
  myScanline[x] = Color.rgbToFifteen(127 - (x / 3), 0, x / 3)
  console.log(`(${127 - (x / 3)}, 0, ${x / 3})`)
  console.log(myScanline[x].toString(2));
}

// draw dummy screen
for (let y = 0; y < 216; y++) {
  drawScanline(y, myScanline, c)
}