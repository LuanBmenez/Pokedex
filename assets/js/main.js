const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 20;
let offset = 0;

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `
    <li class="pokemon ${pokemon.type}" >
         <span class="number">#${pokemon.number}</span>
         <span class="name">${pokemon.name}</span>

         <div class="detail">
           <ol class="types">
               ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
           </ol>
           <img
             src="${pokemon.photo}"
             alt="${pokemon.name}"
           />
         </div>
       </li>
   ` ).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit
  loadPokemonItens(offset, limit);
});
