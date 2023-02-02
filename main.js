const board = document.querySelector('#board')
const squareNumber = 500
const colors = ['#CB2821', '#EA899A', '#EFA94A', '#F54021',
    '#2271B3', '#D0D0D0', '#6C6874', '#F39F18']

for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    board.append(square)
}


function randomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function setColor(element) {

}
function removeColor(element) {

}
