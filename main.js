const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const scoreBox = document.querySelector('#score')

const colors = [
    '#8A9597', '#bc9463', '#c93b79', '#c61a15', '#b992e0',
    '#b528bb', '#1d4450', ' #ED760E', '#999950', '#E63244', '#7E7B52', '#FF2301'
]


let score = 0
let time = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = +event.target.getAttribute('data-time')
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')){
        score++
        scoreBox.innerHTML = score
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    score = 0
    createRandomCircle()
}

function decreaseTime() {
    if (time === 0) {
        gameOver()
    }
    else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function gameOver(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = 
    `
    <h1>Счет: <span class="primary">${score}</span></h1>
    `
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}


function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 50)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = getRandomColor()

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
