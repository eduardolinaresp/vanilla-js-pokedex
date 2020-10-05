import SERVICE from './service.js' 


async function init(){
    let pokemon = null
    
    try {
        
        const service = new SERVICE() 
        pokemon = await service.getpokemon(25)
        console.log(pokemon);

    } catch (error) {
        console.log(error)
    }
  
    window.pokemon_name.textContent = pokemon.name
    window.pokemon_img.setAttribute('src',pokemon.sprites.front_default) 
    updatePokemon(pokemon)
    
   
}


function updatePokemon(pokemon){
    window.pokemon_name.textContent = pokemon.name
    window.pokemon_img.setAttribute('src',pokemon.sprites.front_default) 

}

async  function getnewpokemon(e){

  if (e.key === 'Enter') {
        console.log('Se presionó Enter')
        const pokemonname = window.search.value
        const pokemon = await service.getpokemon(pokemonname)
        updatePokemon(pokemon)
     }
}


init()

window.search.addEventListener('keypress', getnewpokemon, false);


