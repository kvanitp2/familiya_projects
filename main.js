const board = document.querySelector('.board')
const body = document.querySelector('body')

let data = [[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 0]]
const colors = {
    0: 'lightgrey', 2: '#84FBAC', 4: '#C7B446', 8: '#BEBD7F', 16: '#2E3A23',
    32: '#CBD0CC', 64: '#7E7B52', 128: ' #474B4E', 256: '#8F8F8', 512: '#354D73',
    1024: '#A2231D', 2048: '#75151E'
}

body.addEventListener('keydown', (event) => {
    moveController(event.key)
})

function moveController(key) {
    switch (key) {
        case 'a':
            console.log('left')
            break
        case 'd':
            console.log('right')
            break
        case 'w':
            console.log('top')
            break
        case 's':
            console.log('bottom')
            break
    }
}












function reDrawField() {
    board.innerHTML = ''
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            draw(data[i][j])
        }
    }

    function draw(num) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.style.backgroundColor = colors[num]
        square.innerHTML = num ? num : ''
        board.append(square)
    }
}
