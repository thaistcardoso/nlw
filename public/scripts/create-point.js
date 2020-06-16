//console.log("Hello")

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option> Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {


            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false

        })
}



document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// itens de coleta

//pegar todos os li`s

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target



    // add ou remover classe com javascript
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    // console.log(`ITEM ID: `, itemId)


    // verificar se há items selecionados, se sim
    //pegar items selecionados
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound
    })



    //se já estiver selecionado, tirar da seleção
    if (alreadySelected >= 0) {


        //tirar seleção
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {


        //senão tiver selecionado
        // adicionar a seleção
        selectedItems.push(itemId)

    }

    // console.log(`selectedItem:`, selectedItems)


    //atualizar o campo econdido com os items selecionados
    collectedItems.value = selectedItems
}