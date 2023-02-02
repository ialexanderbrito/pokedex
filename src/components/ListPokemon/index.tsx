import { useNavigate } from 'react-router-dom';

import { playAudio } from 'utils/audio';
import { formatId } from 'utils/formatId';
import { formatName } from 'utils/formatName';
import { getPokemonType } from 'utils/getPokemonType';

import { PokemonObject, Type } from 'types/all';

import styles from './ListPokemon.module.scss';

export function ListPokemon(props: { pokemon: PokemonObject }) {
  const navigate = useNavigate();

  const { pokemon } = props;
  const { name, id, sprites, types } = pokemon;
  const { front_default, other } = sprites;

  return (
    <div
      className={`${styles.cardPokemon} ${getPokemonType(pokemon)}`}
      key={id}
      onClick={() => {
        playAudio(name.split('-')[0]);
        navigate(`/pokemon/${name}`);
      }}
    >
      <p>{formatName(name)}</p>
      <div className={styles.id}>
        <h2 className={styles.idText}>#{formatId(id)}</h2>
      </div>
      <img src={other?.home?.front_default || front_default} alt={name} className={styles.imagePokemon} />

      {types.map((type: Type) => (
        <span key={type.slot} className={`${styles.badge}`}>
          {type.type.name.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
