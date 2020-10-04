class api{

   pikachu = 1

    constructor(){
        init(pikachu)
    }

     getpokemon(id) {
   
        fetch('https://pokeapi.co/api/v2/pokemon/{id}')
        .then((response) => response.JSON())
        .then((data) => console.log(data) )
        return data
     }

  
     init(id){
       return getpokemon(id)
     }


}