let d = document
let pokemonList = d.querySelector("#body-pokedex")

let printPokedex = (data) => {
    data.forEach(element => {
        let divContainer = d.createElement("div")
        let containerA = d.createElement("a")
        let containerName = d.createElement("div")
        let pokemonName = d.createElement("span")
        let pokemonId = d.createElement("span")
        let containerData = d.createElement("div")
        let pokemonType = d.createElement("div")
        let pokemonWeight = d.createElement("div")
        let containerImg = d.createElement("div")
        let pokemonImg = d.createElement("img")

        divContainer.classList.add("containerCard")
        containerA.classList.add("containerLink")
        containerName.classList.add("namePokemon")
        containerData.classList.add("dataPokemon")
        containerType.classList.add("typePokemon")
        containerWeight.classList.add("weightPokemon")
        containerImg.classList.add("containerImg")

        pokemonName.textContent = `` //usar interpolación ${}
        pokemonId.textContent = ``
        pokemonType.textContent = ``
        pokemonWeight.textContent = ``
        pokemonImg.setAttribute("src", ``)


        pokemonList.appendChild(divContainer)
        divContainer.append(containerName, containerData, containerImg)
        containerName.append(pokemonName, pokemonId)
        containerData.append(pokemonType, pokemonWeight)
        containerImg.appendChild(imgPokemon)
    });
}