const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const imput = document.querySelector('.imput_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    }
    
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = ''

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']; 
        imput.value = '';
        searchPokemon = data.id;
    } else { 
        pokemonName.innerHTML = 'Not found';
        pokemonNumber.innerHTML = '#';
        pokemonImage.src = '#';
    }
}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    renderPokemon(imput.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
    if (searchPokemon >1) {
    searchPokemon -= 1;
    renderPokemon (searchPokemon);
    }
});

buttonNext.addEventListener('click', () => {
    if (searchPokemon <1010)
    searchPokemon += 1;
    renderPokemon (searchPokemon);
   });
   

renderPokemon(searchPokemon);

const check = document.getElementById("check")
check.addEventListener("change", () => {
    document.body.classList.toggle("dark");
})


var pokedex = "imagens/pokedex.png";
var pokedexnoite = "imagens/pokedexnoite.png";

function change (){
document.getElementById("pokedex").src = pokedexnoite;
let aux = pokedexnoite;
pokedexnoite = pokedex;
pokedex = aux;
}