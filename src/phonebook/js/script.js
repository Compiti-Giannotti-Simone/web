function addContact() {
    const table = document.querySelector('#table-body')
    let newContact = document.createElement('tr')
    let contactId = document.createElement('th')
    contactId.innerHTML = table.querySelectorAll('tr').length + 1
    let contactName = document.createElement('td')
    contactName.innerHTML = document.getElementById('new-name').value
    let contactNumber = document.createElement('td')
    contactNumber.innerHTML = document.getElementById('new-number').value
    newContact.appendChild(contactId)
    newContact.appendChild(contactName)
    newContact.appendChild(contactNumber)
    table.appendChild(newContact)
}

function removeContact() {
    console.log("remove")
}

function search() {
    console.log("search")
}

document.querySelector('#add-button').addEventListener('click',function() {addContact()})
document.querySelector('#remove-button').addEventListener('click',function() {removeContact()})
document.querySelector('#search-field').addEventListener('keypress',function() {search()})