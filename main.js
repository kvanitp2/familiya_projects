const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
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

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
}

function decreaseTime() {
    if (time === 0) {
        console.log('Game over')
    }
    else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
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


}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
