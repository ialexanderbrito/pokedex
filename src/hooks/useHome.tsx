import { useEffect, useState } from 'react';

import { useTheme } from 'contexts/Theme';

import { PokemonObject } from 'types/all';

import { getPokemon, getPokemonName } from 'services/getPokemon';

const ONE_SECOND_DELAY = 1000;

export function useHome() {
  const { theme } = useTheme();

  const [allPokemons, setAllPokemons] = useState<PokemonObject[]>([]);
  const [loadMore, setLoadMore] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  async function getAllPokemons() {
    const { data } = await getPokemon(loadMore);

    const numberOffset = data.results[data.results.length - 1].url.split('/')[6];

    setLoadMore(numberOffset);

    function createPokemonObject(result: PokemonObject[]) {
      result.map(async (pokemon: PokemonObject) => {
        const { data } = await getPokemonName(pokemon.name);

        setAllPokemons((currentList: PokemonObject[]) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
  }

  function carregarPokemons() {
    setLoadingButton(true);
    setTimeout(() => {
      getAllPokemons();
      setLoadingButton(false);
    }, ONE_SECOND_DELAY);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getAllPokemons();
      setLoading(false);
    }, ONE_SECOND_DELAY);
  }, []);

  return {
    theme,
    allPokemons,
    loading,
    loadingButton,
    carregarPokemons,
  };
}
