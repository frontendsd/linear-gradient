let colors = [
    '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f',
]

function changeColor() {
    let color = "#"

for(let i=0; i<6; i++) {
    let rundomNumber = Math.floor(Math.random()*colors.length)
    color += colors[rundomNumber ]
}
return color
}
const color1 = changeColor()
const color2 = changeColor()
document.body.style.background = `linear-gradient(to left, ${color1}, ${color2})`

document.querySelector('.button').addEventListener('click', () => {
    const color1 = changeColor()
    const color2 = changeColor()
    document.body.style.background = `linear-gradient(to left, ${color1}, ${color2})`
    changeColor()
})


