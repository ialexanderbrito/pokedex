import api from './api';

export async function getPokemon(offset?: number) {
  const { data, status } = await api.get(`pokemon/?limit=24&offset=${offset}`);

  return { data, status };
}

export async function getPokemonName(name: string) {
  const { data, status } = await api.get(`pokemon/${name}`);

  return { data, status };
}

export async function getPokemonInfo(name: string) {
  const { data, status } = await api.get(`pokemon-species/${name}`);

  return { data, status };
}
