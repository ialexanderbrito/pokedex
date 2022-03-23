import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useTheme } from 'contexts/Theme';

import { PokemonInfo, PokemonObject } from 'types/all';

import { getPokemonInfo, getPokemonName } from 'services/getPokemon';

const ONE_SECOND_DELAY = 1000;

export function usePokemon() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { id: name } = useParams();

  const [pokemon, setPokemon] = useState<PokemonObject>();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();
  const [loading, setLoading] = useState<boolean>(false);
  const [[flipHorizontally], toggleFlip] = useState([false, false]);

  async function buscaPokemon() {
    const { data } = await getPokemonName(name as string);
    setPokemon(data);
  }

  async function buscaPokemonInfo() {
    const { data } = await getPokemonInfo(name as string);

    setPokemonInfo(data);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      buscaPokemon();

      buscaPokemonInfo();

      setLoading(false);
    }, ONE_SECOND_DELAY);
  }, []);

  function flipCard(event: any) {
    toggleFlip([event.target.checked, flipHorizontally]);
  }

  return {
    navigate,
    theme,
    pokemon,
    pokemonInfo,
    loading,
    flipCard,
    flipHorizontally,
  };
}
