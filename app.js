import { Color } from "./color"


/**
 * Draws a given scanline to the canvas
 * @param {number} y Scanline Y-value, from top = 0
 * @param {Array} lineBuffer Array containing color values for the scanline
 * @param {Object} c Handle for canvas
 */
function drawScanline(y, lineBuffer, c) {
  for (let x = 0; x < lineBuffer.length; x++) {
    c.fillStyle = Color.fifteenToHex(lineBuffer[x])
    c.fillRect(x, y, 1, 1)
  }
}


const canvas = document.querySelector('canvas')
const c = canvas?.getContext('2d')
c.beginPath()

// create dummy scanline
let myScanline = []
for (let x = 0; x < 384; x++) {
  
}