import "./Pokemon.css";
import data from '../public/data/pokemons.json';

export default function Pokemon() {
  const index = randomPokemonIndex();
  const n = getPokemonName(index);
  const url = getURL(index);

  return (
    <div className="RandomPokemon">
      <p className="Pokemon-Title">#{index} {n}</p>
      <img src={url} />
    </div>
  );
}

function getURL(pokemonIndex = -1) {
  var url = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`;
  return url;
}

function randomPokemonIndex(begin = 1, end = 600) {
  return Math.floor(Math.random() * (end - begin + 1) + begin);
}

function getPokemonName(index) {
    var n = data[index + 1].name.english;
    return n;
}