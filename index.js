// canvas draw eyes with beginPath, moveTo, quadraticCurveTo,stroke
// first make to follow mouse
// make follow camera

const ctx = canvas.getContext('2d')
canvas.width = 1000;
canvas.height = 1000;

ctx.beginPath()
ctx.fillStyle = 'black'
ctx.moveTo(0, 500)
ctx.lineTo(1000, 500)
ctx.stroke()
ctx.beginPath()
ctx.fillStyle = 'black'
ctx.moveTo(500, 0)
ctx.lineTo(500, 1000)
ctx.stroke()

canvas.addEventListener('click', (e) => {
    console.log(`${e.offsetX} ${e.offsetY}`)
})