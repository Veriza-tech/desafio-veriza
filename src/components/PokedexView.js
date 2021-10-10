import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PokemonService from '../service/PokemonService';
import PokemonCard from './PokemonCard';
import PokemonSearch from './PokemonSearch';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function PokedexView() {
  const [pokemons, setPokemons] = useState([]);
  const [filterPokemons, setFilterPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pokemonList = await PokemonService.list();
      setPokemons(pokemonList);
      setFilterPokemons(pokemonList);
    }
    fetchData();
  }, []);

  const filterPoke = (input) => {
    setFilterPokemons(pokemons.filter((element) => ((input) ? (element.name === input || element.num === input  ) : pokemons)));
  };

  return (
    <>
      <PokemonSearch filterPoke={filterPoke} />
      <Container>
        {
          filterPokemons.map((pokemon) => {
            const { num, name, img , type } = pokemon;
            return (
              <PokemonCard
                key={pokemon.num}
                number={num}
                name={name}
                imgSrc={img}
                typeList={type}
              />
            );
          })
        }
      </Container>
    </>
  );
}
