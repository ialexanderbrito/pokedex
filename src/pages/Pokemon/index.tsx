import { BiArrowBack } from 'react-icons/bi';

import { BackCard } from 'components/BackCard';
import { CardPokemon } from 'components/CardPokemon';

import { usePokemon } from 'hooks/usePokemon';

import pokebola from 'assets/pokebola.gif';

import styles from './Pokemon.module.scss';

export function Pokemon() {
  const { navigate, theme, pokemon, pokemonInfo, loading, flipCard, flipHorizontally } = usePokemon();

  return (
    <>
      {loading ? (
        <div className={styles.home} data-theme={theme}>
          <img src={pokebola} alt="Pokebola" />
        </div>
      ) : (
        <>
          {pokemon && (
            <div className={styles.home} data-theme={theme}>
              <div className={styles.voltar}>
                <BiArrowBack
                  style={{
                    cursor: 'pointer',
                  }}
                  size={32}
                  onClick={() => {
                    navigate('/');
                  }}
                />
              </div>
              {flipHorizontally ? (
                <BackCard
                  onClick={() => {
                    flipCard({ target: { checked: false } });
                  }}
                />
              ) : (
                <CardPokemon
                  pokemon={pokemon}
                  pokemonInfo={pokemonInfo}
                  onClick={() => {
                    flipCard({ target: { checked: true } });
                  }}
                />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
