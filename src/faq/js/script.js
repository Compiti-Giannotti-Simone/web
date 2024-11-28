function toggleAnswer(n) {
    const question = document.getElementById('question' + n)
    const answer = document.getElementById('answer' + n)
    const icon = document.querySelector("#question" + n + " .bi")
    answer.classList.toggle('d-none')
    icon.classList.toggle('bi-arrow-down-circle-fill')
    icon.classList.toggle('bi-arrow-up-circle')
}