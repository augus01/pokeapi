let d = document

const navBar = d.querySelector("#nav-bar")
const kanto = d.querySelector("#kanto")
const johto = d.querySelector("#johto")
const hoenn = d.querySelector("#hoenn")
const sinnoh = d.querySelector("#sinnoh")
const teselia = d.querySelector("#teselia")
const kalos = d.querySelector("#kalos")
const alola = d.querySelector("#alola")
const galar = d.querySelector("#galar")
const pokemonList = d.querySelector(".body-pokemon")

let a = 152
let b = 251

let dataPokemon = []
let img = []
let types = []
let abilities = []

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(results => {
            dataPokemon.push(results)
            img.push(results.sprites.front_default)
            types.push(results.types)
            abilities.push(results.abilities)
            printPokedex(results)
        })
}

function fetchPokemons(a, b) {
    for (let i = a; i <= b; i++) {
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
    let Box2Type = d.createElement("ul")
    let Box2Weight = d.createElement("p")
    let Box2Abilities = d.createElement("ul")
    Box2Abilities.textContent = "Abilities:"
    let Box3 = d.createElement("div")
    let Box3Img = d.createElement("img")
    

    BoxNexus.classList.add("box-pokemon")
    BoxNexus.setAttribute("id", "box-pokemon")

    BoxLink.classList.add("box-link")
    BoxLink.setAttribute("id", `box-link-${pokemon.id}`)
    BoxLink.href = "../SpecPoke.html"

    Box1.classList.add("NameIdZone")
    Box1.setAttribute("id", "caja-1")
    Box1Name.classList.add("NamePoke")
    Box1Id.classList.add("IdPoke")


    Box2.classList.add("TypeWeightZone")
    Box2.setAttribute("id", "caja-2")
    Box2Type.classList.add("TypePoke")
    Box2Weight.classList.add("WeightPoke")
    Box2Abilities.classList.add("AbilitiesPoke")

    Box3.classList.add("ImgZone")
    Box3.setAttribute("id", "caja-3")
    Box3Img.classList.add("ImgPoke")


    pokemonList.appendChild(BoxNexus)
    BoxNexus.appendChild(BoxLink)

    BoxLink.appendChild(Box1)
    Box1.append(Box1Name, Box1Id)

    BoxLink.appendChild(Box2)
    Box2.append(Box2Type,Box2Weight,Box2Abilities)


    BoxLink.appendChild(Box3)
    Box3.appendChild(Box3Img)

    img.forEach(element => {
        Box3Img.setAttribute("src", `${element}`)
    });

    pokemon.types.forEach(type => {
        let typeElement = d.createElement("li")
        let elementText = d.createElement("p")
        Box2Type.appendChild(typeElement)
        typeElement.appendChild(elementText)
        typeElement.classList.add("typePokemon")
        elementText.setAttribute("id", `typePokemonTex${pokemon.id}`)
        elementText.textContent = `${type.type.name}`
        printColorType(pokemon.id)

    });
    pokemon.abilities.forEach(ability =>{
        
        let abilityElement = d.createElement("li")
        let abilityText = d.createElement("p")
        Box2Abilities.appendChild(abilityElement)
        abilityElement.appendChild(abilityText)
        abilityElement.classList.add("abilityPoke")
        abilityText.setAttribute("id", "abilityPoke")
        abilityText.textContent = `${ability.ability.name}`
    })
    Box1Name.textContent = `${pokemon.name}`
    Box1Id.textContent = `#${pokemon.id}`
    Box2Weight.textContent = `Weight: ${pokemon.weight}`
}
let printColorType = ( id) => {
    switch (d.querySelector(`#typePokemonTex${id}`).innerHTML) {
        case "steel":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#DDCCAA';
            break;
        case type = "water":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#B0E2FF';
            break;
        case "bug":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#99CC33';
            break;
        case "dragon":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#AB82FF';
            break;
        case "electric":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#FFD700';
            break;
        case "ghost":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#778899';
            break;
        case "fire":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#FF7F00';
            break;
        case "fairy":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#FFB0FF';
            break;
        case "ice":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#ADD8E6';
            break;
        case "fighting":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#FF6A6A';
            break;
        case "normal":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#DDCCAA';
            break;
        case "grass":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#99FF66';
            break;
        case "psychic":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#FFB5C5	';
            break;
        case "rock":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#CD853F	';
            break;
        case "dark":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#A9A9A9';
            break;
        case "ground":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#DEB887';
            break;
        case "poison":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#CC88BB';
            break;
        case "flying":
            document.querySelector(`#box-link-${id}`).style.backgroundColor = '#BAAAFF';
            break;

    }


}

kanto.addEventListener("click", (event) => {
    pokemonList.textContent = ""
    fetchPokemons(1, 151);
})

johto.addEventListener("click", (event) => {
    pokemonList.textContent = ""
    fetchPokemons(152, 251);
})

hoenn.addEventListener("click", (event) => {
    pokemonList.textContent = ""
    fetchPokemons(252, 386);
})
sinnoh.addEventListener("click", (event) => {
    pokemonList.textContent = ""
    fetchPokemons(387, 491);
})
teselia.addEventListener("click", (event) => {
    pokemonList.textContent = ""
    fetchPokemons(494, 649);
})
kalos.addEventListener("click", (event) => {
    pokemonList.textContent = ""
    fetchPokemons(650, 721);
})
alola.addEventListener("click", (event) => {
    pokemonList.textContent = ""
    fetchPokemons(722, 809);
})
galar.addEventListener("click", (event) => {
    pokemonList.textContent = ""
    fetchPokemons(810, 898);
})
fetchPokemons(a, b);