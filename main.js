const board = document.querySelector('#board')
const squareNumber = 500
const colors = ['#CB2821', '#EA899A', '#EFA94A', '#F54021',
    '#2271B3', '#D0D0D0', '#6C6874', '#F39F18']

for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave',()=>{
        removeColor(square)
    })
    board.append(square)
}
function randomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
function setColor(element) {
    const color = randomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}
