export class Color {

  /**
   * Returns the hex string of a 15-bit encoded color
   * @param {...number} fifteenColor A 15-bit encoded color
   */
  static fifteenToHex(fifteenColor = 0) {
    let red = (31744 & fifteenColor) >> 7
    let redHex = red.toString(16)
    redHex.length < 2 ? redHex = '0' + redHex : redHex = redHex
    let green = (992 & fifteenColor) >> 2
    let greenHex = green.toString(16)
    greenHex.length < 2 ? greenHex = '0' + greenHex : greenHex = greenHex
    let blue = (31 & fifteenColor) << 3
    let blueHex = blue.toString(16)
    blueHex.length < 2 ? blueHex = '0' + blueHex : blueHex = blueHex
    return '#' + redHex + greenHex + blueHex
  }

  /**
   * Returns the 15-bit encoded color for rgb values (0-255)
   * @param {number} red Red value from 0-255
   * @param {number} green Green value from 0-255
   * @param {number} blue Blue value from 0-255
   */
  static rgbToFifteen(red, green, blue) {
    let fifteenColor = Math.floor(red >> 3) << 10
    fifteenColor |= Math.floor(green >> 3) << 5
    fifteenColor |= Math.floor(blue >> 3)
    return fifteenColor
  }
}
