let total_price = 0
document.querySelector('#add_button').addEventListener('click',()=>{newGift()});

displayGifts()

function displayGifts() {
    document.querySelector('#main_div').innerHTML = ""
    document.querySelector('#total_price').innerHTML = total_price + "€"
    gifts.forEach(element => {
        displayGift(element)
    })
}

function displayGift(gift) {
    const div = document.createElement('div')
    div.classList.add("col-md-6", "bg-dark", "bg-opacity-75", "text-center", "border-2", "border", "border-light", "px-0")
    div.innerHTML = 
    `<h2 class="text-light bg-warning p-2">${gift.articolo}<span class='mx-1'><a onclick="removeGift(event)" class='remove-button link-danger link-underline-opacity-0' href='#'><i class='bi bi-x-lg'></i></a></span></h2>
        <p class="text-light">${gift.destinatario}</p>
        <p class='text-light'>${gift.prezzo} €</p>
    `
    document.querySelector('#main_div').appendChild(div)
    updatePrice(gift.prezzo)
}

function removeGift(event) {
    const gift_name = event.target.parentElement.parentElement.parentElement.innerHTML.split('<')[0]
    gifts = gifts.filter(gift => gift.articolo !== gift_name)
    displayGifts()
}

function newGift() {
    const article = document.querySelector('#article_field').value  
    const receiver = document.querySelector('#receiver_field').value
    const price = document.querySelector('#price_field').value
    const new_gift = {
        articolo: article,
        destinatario: receiver,
        prezzo: parseInt(price),
    }
    gifts.push(new_gift)
    displayGifts()
}

function updatePrice() {
    total_price = gifts.reduce((acc, gift) => acc + gift.prezzo, 0)
    document.querySelector('#total_price').innerHTML = total_price + "€" 
}