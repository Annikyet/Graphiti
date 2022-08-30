const canvas = document.querySelector('canvas')
const c = canvas?.getContext('2d')

c.beginPath()
// c?.moveTo(128, 128)
c.fillStyle = 'purple'
c.fillRect(128, 128, 16, 16)
// c?.lineTo(200,200)
// c.fill()