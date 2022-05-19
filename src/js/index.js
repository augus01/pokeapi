let d = document

let pokemonList = d.querySelector(".body-pokemon")

let a = 400
let b = 555

let dataPokemon = []
let img = []
let types = []

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(results => {
            
            dataPokemon.push(results)
            img.push(results.sprites.front_default)
            
            types.push(results.types.name)

            printPokedex(results)
            return results.types
        })
        .then(res => {
            console.log(res)
            
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
        
        img.forEach(element => {
            Box3Img.setAttribute("src", `${element}`)
        });
        pokemon.types.forEach(element => {
            Box2Type.textContent = `#${element}`
        });
        
        Box1Name.textContent = `#${pokemon.name}` //usar interpolación ${}
        Box1Id.textContent = `#${pokemon.id}`
        
        Box2Weight.textContent = `#${pokemon.weight}`
        
        

        
        

}

function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


fetchPokemons(a, b);