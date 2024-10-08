//CRIANDO A REQUISIÇÃO
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(response => response.json())
.then(allPokemon =>{

    let pokemons = []
    
    allPokemon.results.map((value)=>{
       
    
    fetch(value.url)
    .then(response => response.json())
    .then(pokemon =>{

        pokemons.push({
            nome: value.name,
            imagem: pokemon.sprites.front_default// recuperando as imagens
            })
            

            if(pokemons.length === 10){
                console.log('ok');
                
            }
        })

    })

})