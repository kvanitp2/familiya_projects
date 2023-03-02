
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
        if (i === 0){
            temp += ' 0%, '
        } else if (i === 2){
            temp += ' 100%'
        }
        else{
            temp += ` ${f(0,100)}%, `
        }
    }
   
    return `linear-gradient(${f(0, 360)}deg, ${temp});`
}
