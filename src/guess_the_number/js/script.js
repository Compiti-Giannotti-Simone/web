let number = Math.round(Math.random()*100)
const guesses = []

function instructions() {
    const icon = document.getElementById('instructions-icon')
    icon.classList.toggle('bi-arrow-right-circle')
    icon.classList.toggle('bi-arrow-down-circle-fill')
    document.getElementById('instructions').classList.toggle('d-none')
}

function play() {
    document.getElementById('play-button').setAttribute("disabled","true")
    document.getElementById('playfield').classList.remove('d-none')
}

function checkNumber() {
    const guess = document.getElementById('guess').value
    if(guess != '' && guess > 0 && guess <= 100) {
        if(guesses.indexOf(guess) == -1) {
            guesses.push(guess)
            if(guess == number) win()
            else higherOrLower(guess)
            document.getElementById('attempts').innerHTML -= 1
            document.getElementById('number-list').innerHTML = guesses.join(" - ")
            document.getElementById('guess').value = ""
            document.getElementById('alert').innerHTML = ""
        }
        else {
            document.getElementById('alert').innerHTML = "Numero già inserito"
        }
        if(document.getElementById('attempts').innerHTML == 0) lose()
    }
    else {
        document.getElementById('alert').innerHTML = "Numero non valido"
    }
}

function win() {
    document.getElementById('restart-button').classList.remove('d-none')
    document.getElementById('hint').innerHTML = ""
    document.getElementById('guess-button').setAttribute("disabled", "true")
    document.getElementById('playfield').classList.add('win')
    document.getElementById('win-message').innerHTML = "YOU WIN"
}

function lose() {
    document.getElementById('restart-button').classList.remove('d-none')
    document.getElementById('hint').innerHTML = ""
    document.getElementById('guess-button').setAttribute("disabled", "true")
    document.getElementById('playfield').classList.add('lose')
    document.getElementById('win-message').innerHTML = "YOU LOSE - Il numero era " + number
}

function higherOrLower(n) {
    if(n > number) document.getElementById('hint').innerHTML = "Il numero che stai cercando è più piccolo"
    else document.getElementById('hint').innerHTML = "Il numero che stai cercando è più grande"
}

function restart() {
    guesses.splice(0,guesses.length)
    number = Math.round(Math.random()*100)
    document.getElementById('guess-button').removeAttribute("disabled")
    document.getElementById('playfield').classList.remove('lose')
    document.getElementById('playfield').classList.remove('win')
    document.getElementById('restart-button').classList.add('d-none')
    document.getElementById('win-message').innerHTML = ""
    document.getElementById('attempts').innerHTML = 7
    document.getElementById('number-list').innerHTML = ""
}