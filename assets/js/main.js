const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 20;
let offset = 0;

// function loadPokemonItems(offset, limit) {
//   pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
//     const newHtml = pokemons
//       .map(
//         (pokemon) => `
//     <li class="pokemon ${pokemon.type}" >
//          <span class="number">#${pokemon.number}</span>
//          <span class="name">${pokemon.name}</span>

//          <div class="detail">
//            <ol class="types">
//                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
//            </ol>
//            <img
//              src="${pokemon.photo}"
//              alt="${pokemon.name}"
//            />
//          </div>
//        </li>
//    ` ).join("");
//     pokemonList.innerHTML += newHtml;
//   });
// }

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemons.forEach((pokemon) => {
      const listItem = document.createElement("li");
      listItem.classList.add("pokemon", pokemon.type);

      const number = document.createElement("span");
      number.classList.add("number");
      number.textContent = `#${pokemon.number}`;

      const name = document.createElement("span");
      name.classList.add("name");
      name.textContent = pokemon.name;

      const detail = document.createElement("div");
      detail.classList.add("detail");

      const typesList = document.createElement("ol");
      typesList.classList.add("types");

      pokemon.types.forEach((type) => {
        const typeItem = document.createElement("li");
        typeItem.classList.add("type", type);
        typeItem.textContent = type;
        typesList.appendChild(typeItem);
      });

      const img = document.createElement("img");
      img.src = pokemon.photo;
      img.alt = pokemon.name;

      detail.append(typesList, img);
      listItem.append(number, name, detail);
      pokemonList.appendChild(listItem);
    });
  });
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadPokemonItems(offset, limit);
});

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
