const btn = document.getElementById('botao')

const adicionaItem = (event) => {
    const cont = document.getElementById(`container`)
    
    const item = `<article class="item" onclick="removeItem(event)"></article>`

    cont.innerHTML += item
}

const removeItem = (event) => {
    event.target.remove()
}