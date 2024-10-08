//CHAMANDO A FUNÇÃO E DEFINIR A QUANTIDADE DE POKEMON QUEREMOS

let quantidadePokemon = document.getElementById('quantidade')
quantidadePokemon.addEventListener('keyup', ()=>{
    capturarPokemon(parseInt(quantidadePokemon.value))
})

function capturarPokemon(quantidade){
    //CRIANDO A REQUISIÇÃO
fetch('https://pokeapi.co/api/v2/pokemon?limit=' + quantidade)
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

            if(pokemons.length === quantidade){      
            
                var pokemonBoxes = document.querySelector('.pokemon-boxes')
                pokemonBoxes.innerHTML = ""
            
                pokemons.map((valores)=>{
                    pokemonBoxes.innerHTML += 
                    `
                        <div class="pokemon-box">
                            <img src="${valores.imagem}" alt="Um pokemon">
                            <p>${valores.nome}</p>
                        </div>
                
                    `
                })
            }
        })
    })
})
}