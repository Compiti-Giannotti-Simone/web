function toggleDarkMode() {
    document.body.classList.toggle('dark-mode', this.checked)
    
    const icon = document.getElementById('iconToggle')
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon-fill')
        icon.classList.add('bi-sun-fill')
    } else {
        icon.classList.remove('bi-sun-fill')
        icon.classList.add('bi-moon-fill')
    }
}

function calculateValue() {
    const euro = document.getElementById('number-input').value
    const dollar = Math.round((euro * 1.16) * 100) / 100
    const pound = Math.round((euro * 0.85) * 100) / 100
    const yen = Math.round((euro * 128.77) * 100) / 100

    document.getElementById('dollar-out').innerHTML = "$ " + dollar
    document.getElementById('pounds-out').innerHTML = "£ " + pound
    document.getElementById('yen-out').innerHTML = "¥ " + yen
}