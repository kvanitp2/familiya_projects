const items = document.querySelectorAll('img')
const itemCount = items.length
const previousItem = document.querySelector('.previous')
const nextItem = document.querySelector('.next')
let count = 0

function showNextItem() {
    items[count].classList.remove('active')
    if (count < itemCount - 1) {
        count++
    }
    else {
        count = 0
    }
    items[count].classList.add('active')
}

function showPreviousItem() {
    items[count].classList.remove('active')
    if (count > 0) {
        count--
    }
    else {
        count = itemCount - 1
    }
    items[count].classList.add('active')
}

function keyPress(event){
    if(event.keyCode === 37){
        showPreviousItem()
    }else if (event.keyCode === 39){
        showNextItem()
    }
}


document.addEventListener('keydown', keyPress)
previousItem.addEventListener('click', showPreviousItem)
nextItem.addEventListener('click', showNextItem)