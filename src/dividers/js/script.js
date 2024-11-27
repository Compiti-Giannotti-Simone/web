function calculateDivisors() {
    let amount = 0
    let divisors = []
    let out_div = document.getElementById("output-div")
    let out = document.getElementById("output")
    const number = document.getElementById("number-input").value
    for(let i = 1;i <= number;i++) {
        if(number % i === 0) {
            divisors.push(i)
            amount++
        } 
    }
    out.innerHTML = "Il numero ha " + amount + " divisori" + "<br>" + divisors;
    if(isPrime(number)) {
        out_div.insertAdjacentHTML('beforeend', "<br>Il numero è primo")
        out_div.classList.add("bg-danger")
    }
}

function isPrime(n) {
    for(let i = 2;i < Math.sqrt(n);i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}