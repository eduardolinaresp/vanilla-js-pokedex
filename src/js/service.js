import API from './api.js'

export default class service {

    #_api

    constructor() {

        this.#_api = new API()

        if (!this.#_api) {

            console.log('no creado')    
        }
        

    }

    async getpokemon(pokemon) {
        const servicepokemon = 25
        let servicepokemondata = null

        try {
            servicepokemondata = await this.#_api.getApiPokemon(servicepokemon)
            console.log(this.#_api.getApiPokemon(servicepokemon))

        } catch (error) {
         //   servicepokemondata = null
         console.log(error)
        }

        return servicepokemondata

    }

    async getpokemonlist() {

        const pokemondataList = null

        try {
            pokemondataList = this.#_api.getApiPokemon(pokemon)

        } catch (error) {
            pokemondataList = null
        }

        return pokemondataList

    }

}