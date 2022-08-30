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

function colorTest() {
  for (let r = 0; r < 256; r += 60) {
    for (let g = 0; g < 256; g += 60) {
      for (let b = 0; b < 256; b += 60) {
        console.log(`(${r}, ${g}, ${b})`)
        let myFifteen = Color.rgbToFifteen(r, g, b)
        // console.log(myFifteen.toString(2))
        let myHex = Color.fifteenToHex(myFifteen)
        // console.log(myHex)
      }
    }
  }

}


const canvas = document.querySelector('canvas')
const c = canvas?.getContext('2d')
c?.beginPath()

// create dummy scanline
let myScanline = []
for (let x = 0; x < 384; x++) {
  myScanline[x] = Color.rgbToFifteen(127 - (x / 3), 0, x / 3)
  // console.log(`(${127 - (x / 3)}, 0, ${x / 3})`)
  // console.log(myScanline[x].toString(2));
  // console.log(Color.fifteenToHex(myScanline[x]))
}

// draw dummy screen
for (let y = 0; y < 216; y++) {
  drawScanline(y, myScanline, c)
}

colorTest()