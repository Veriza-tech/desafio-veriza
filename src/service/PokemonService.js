class PokemonService {
  async list() {
    try {
      const pokemonsReponse = await fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`);
      const pokemonList = await pokemonsReponse.json();
      return pokemonList.pokemon;
    } catch (error) {
      return [];
    }
  }
}

export default new PokemonService();