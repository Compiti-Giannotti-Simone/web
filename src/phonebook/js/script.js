function checkNumber(number) {
    const contacts = document.querySelectorAll('#table-body tr')
    for(let i = 0;i<contacts.length;i++) {
        if(contacts[i].children[2].innerHTML == number) return false
    }
    return true
}

function addContact() {
    const new_number = document.getElementById('new-number').value
    if(checkNumber(new_number)) {
    const table = document.querySelector('#table-body')
    let newContact = document.createElement('tr')
    let contactId = document.createElement('th')
    contactId.innerHTML = table.querySelectorAll('tr').length + 1
    let contactName = document.createElement('td')
    contactName.innerHTML = document.getElementById('new-name').value
    let contactNumber = document.createElement('td')
    contactNumber.innerHTML = new_number
    newContact.appendChild(contactId)
    newContact.appendChild(contactName)
    newContact.appendChild(contactNumber)
    table.appendChild(newContact)
    document.querySelector('#adding-error').innerHTML = ""
    }
    else {
        document.querySelector('#adding-error').innerHTML = "Il numero " + new_number + " è già presente nella lista"
    }
}

function updateList(index) {
    const contacts = document.querySelectorAll('#table-body tr')
    contacts[index].remove()
    for(let i = index;i < contacts.length;i++) {
        contacts[i].children[0].innerHTML = "" + (i)
    }
}

function removeContact() {
    const removed_id = document.querySelector('#removed-id').value
    const contacts = document.querySelectorAll('#table-body tr')
    
    if(removed_id <= contacts.length) {
        contacts[removed_id-1].classList.add('removed')
        setTimeout(updateList,1500,removed_id-1)
    }
    else {
        document.querySelector('#removal-error').innerHTML = "Id non presente nella lista"
    }
}

function search() {
    const search = document.querySelector('#search-field').value
    const contacts = document.querySelectorAll('#table-body tr')
    for(let i = 0;i<contacts.length;i++) {
        const contact_name = contacts[i].children[1].innerHTML
        if(!contact_name.toLowerCase().includes(search.toLowerCase())) {
            contacts[i].classList.add('d-none')
        }
        else {
            contacts[i].classList.remove('d-none')
        }
    }
}

document.querySelector('#add-button').addEventListener('click',function() {addContact()})
document.querySelector('#remove-button').addEventListener('click',function() {removeContact()})
document.querySelector('#search-field').addEventListener('input',function() {search()})