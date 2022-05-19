let d = document

let pokemonList = d.querySelector(".body-pokemon")

let a = 152
let b = 250

let dataPokemon = []

// fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then(res => res.json())
//     .then(results => (dataPokemon = results.results))
//     .then(() => printPokedex(dataPokemon))


function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(results => {
            dataPokemon.push(results)
            printPokedex(results)
            console.log(dataPokemon)
        })
}

function fetchPokemons(a, b) {
    for (let i = 152; i <= 251; i++) {
        fetchPokemon(i);
    }
}


let printPokedex = (pokemon) => {

        let BoxNexus = d.createElement("div")
        let BoxLink = d.createElement("a")
        let Box1 = d.createElement("div")
        let Box1Name = d.createElement("p")
        let Box1Id = d.createElement("p")

        let Box2 = d.createElement("div")
        let Box2Type = d.createElement("p")
        let Box2Weight = d.createElement("p")

        let Box3 = d.createElement("div")
        let Box3Img = d.createElement("img")

        BoxNexus.classList.add("box-pokemon")
        BoxNexus.setAttribute("id", "box-pokemon")

        BoxLink.classList.add("box-link")
        BoxLink.href = "google.com"

        Box1.classList.add("NameIdZone")
        Box1.setAttribute("id", "caja-1")
        Box1Name.classList.add("NamePoke")
        // Box1Name.textContent = pokemon.name
        Box1Id.classList.add("IdPoke")
        

        Box2.classList.add("TypeWeightZone")
        Box2.setAttribute("id", "caja-2")
        Box2Type.classList.add("TypePoke")
        Box2Weight.classList.add("WeightPoke")

        Box3.classList.add("ImgZone")
        Box3.setAttribute("id", "caja-3")
        Box3Img.classList.add("ImgPoke")
        Box3Img.src = pokemon.sprite
  
        pokemonList.appendChild(BoxNexus)
        BoxNexus.appendChild(BoxLink)

        BoxLink.appendChild(Box1)
        Box1.appendChild(Box1Name)
        Box1.appendChild(Box1Id)

        BoxLink.appendChild(Box2)
        Box2.appendChild(Box2Type)
        Box2.appendChild(Box2Weight)

        BoxLink.appendChild(Box3)
        Box3.appendChild(Box3Img)

        Box1Name.textContent = `${pokemon.name}` //usar interpolación ${}
        Box1Id.textContent = `${pokemon.id}`
        Box2Type.textContent = `#${pokemon.type}`
        Box2Weight.textContent = `${pokemon.weight}`
        Box3Img.setAttribute("src", `${pokemon.sprite}`)


        

        // let divContainer = d.createElement("div")
        // let containerA = d.createElement("a")
        // let containerName = d.createElement("div")
        // let pokemonName = d.createElement("span")
        // let pokemonId = d.createElement("span")
        // let containerData = d.createElement("div")
        // let pokemonType = d.createElement("div")
        // let pokemonWeight = d.createElement("div")
        // let containerImg = d.createElement("div")
        // let pokemonImg = d.createElement("img")
        
        // divContainer.classList.add("containerCard")
        // containerA.classList.add("containerLink")
        // containerName.classList.add("namePokemon")
        // containerData.classList.add("dataPokemon")
        // pokemonType.classList.add("typePokemon")
        // pokemonWeight.classList.add("weightPokemon")
        // containerImg.classList.add("containerImg")

        // pokemonList.appendChild(divContainer)
        // divContainer.append(containerName, containerData, containerImg)
        // containerName.append(pokemonName, pokemonId)
        // containerData.append(pokemonType, pokemonWeight)
        // containerImg.appendChild(imgPokemon)
    
}

function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


fetchPokemons(a, b);