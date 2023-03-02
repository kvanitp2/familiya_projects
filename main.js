const items = document.querySelectorAll('.sidebar-item')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0

sidebar.style.top = `-${slidesCount - 1 * 100}vh`

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height})px`
    sidebar.style.transform = `translateY(${activeSlideIndex * height})px`
}


for (let i = 0; i < items.length; i++) {
    let color = getRandomGradient()
    items[i].style.background = color
}



function getRandomGradient() {
    function rgba() {
        return `rgba(${f(0, 255)}, ${f(0, 255)}, ${f(0, 255)}, 1)`
    }

    function f(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    let temp = ''
    for (let i = 0; i < 3; i++) {
        temp += rgba()
        if (i === 0) {
            temp += ' 0%, '
        } else if (i === 2) {
            temp += ' 100%'
        }
        else {
            temp += ` ${f(0, 100)}%, `
        }
    }

    return `linear-gradient(${f(0, 360)}deg, ${temp})`
}
