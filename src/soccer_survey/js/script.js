let resultsChart
let votes = []
let labels = []
document.querySelector('#draw-button').addEventListener('click',drawGraph)

function getResults() {
    votes = []
    const inputs = document.querySelectorAll('.votes')
    inputs.forEach(element => {
        votes.push(element.value)
    });
}

function getLabels() {
    labels = []
    const l = document.querySelectorAll('.form-label')
    l.forEach(element => {
        labels.push(element.innerHTML)
    });
}

function drawGraph() {
    getResults()
    getLabels()
    if(!votes.includes('')) {
        resultsChart = new Chart(document.querySelector('#results-chart'), {
            type: "pie",
            data: {
                labels: labels,
                datasets: [{
                    label: "# of Votes",
                    data: votes,
                    backgroundColor: [
                        "blue",
                        "black",
                        "magenta",
                        "red"
                    ]
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        position: "right"
                    }
                }
            }
        })
        const button = document.querySelector('#draw-button')
        button.removeEventListener("click",drawGraph)
        button.addEventListener('click',updateGraph)
        button.classList.add("btn-warning")
        button.classList.remove("btn-secondary")
        button.innerHTML = "Update"
    }
}

function updateGraph() {
    getResults()
    resultsChart.data.datasets[0].data = votes
    resultsChart.update()
}