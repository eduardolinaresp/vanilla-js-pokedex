export default class api{

    #_pikachu = 1

    constructor(){
      //  init(pikachu)
    }

    async  getApiPokemon(pokemon) {
   
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const response = await fetch(url)
      const apipokemondata   = await response.json()
      return apipokemondata

     }


}