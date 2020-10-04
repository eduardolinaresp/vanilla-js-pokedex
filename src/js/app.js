async function getpokemon(pokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    const pokemondata   = await response.json()
    return pokemondata
    }

async function init(){
    
    const pokemon = await getpokemon(25)

    window.pokemonname.textContent = pokemon.name
    window.pokemonimg.setAttribute('src',pokemon.sprites.front_default) 
    updatePokemon(pokemon)
    console.log(pokemon);
}


function updatePokemon(pokemon){
    window.pokemonname.textContent = pokemon.name
    window.pokemonimg.setAttribute('src',pokemon.sprites.front_default) 

}

async  function getnewpokemon(e){

  if (e.key === 'Enter') {
        console.log('Se presionó Enter')
        const pokemonname = window.search.value
        const pokemon = await getpokemon(pokemonname)
        updatePokemon(pokemon)
     }
}




init()

//window.search.addEventListener('keypress', async getnewpokemon(e));




window.search.addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        console.log('Se presionó Enter')
        const pokemonname = window.search.value
        const pokemon = await getpokemon(pokemonname)
        updatePokemon(pokemon)
     }
});


/*       window.search.addEventListener('change', async() => {
    const pokemonname = window.search.value
    const pokemon = await getpokemon(pokemonname)
    updatePokemon(pokemon)

})

*/
