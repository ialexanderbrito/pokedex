import { PokemonObject } from './../types/all';

export function getPokemonType(pokemon: PokemonObject) {
  if (pokemon?.types[0]?.type.name === 'normal') {
    return pokemon?.types[1]?.type.name;
  }

  return pokemon?.types[0]?.type.name;
}
