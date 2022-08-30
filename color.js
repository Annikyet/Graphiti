export class Color {

  /**
   * Returns the hex string of a 15-bit encoded color
   * @param {...number} fifteenColor A 15-bit encoded color
   */
  static fifteenToHex(fifteenColor = 0) {
    let red = (31744 & fifteenColor) >> 7
    let green = (992 & fifteenColor) >> 2
    let blue = (31 & fifteenColor) << 3
    return '#' + red.toString(16) + green.toString(16) + blue.toString(16)
  }

  /**
   * Returns the 15-bit encoded color for rgb values (0-31)
   * @param {number} red Red value from 0-31
   * @param {number} green Green value from 0-31
   * @param {number} blue Blue value from 0-31
   */
  static rgbToFifteen(red, green, blue) {

  }
}
