import { Button } from 'components/Button';
import { ListPokemon } from 'components/ListPokemon';

import { useHome } from 'hooks/useHome';

import { PokemonObject } from 'types/all';

import pokebola from 'assets/pokebola.gif';

import styles from './Home.module.scss';

export function Homepage() {
  const { theme, allPokemons, loading, loadingButton, carregarPokemons } = useHome();

  return (
    <>
      {loading ? (
        <div className={styles.home} data-theme={theme}>
          <img src={pokebola} alt="Pokebola" />
        </div>
      ) : (
        <>
          <div className={styles.home} data-theme={theme}>
            <div className={styles.container}>
              <div className={styles.pokemonList}>
                {allPokemons?.map((pokemon: PokemonObject) => (
                  <ListPokemon key={pokemon.id} pokemon={pokemon} />
                ))}
              </div>
              <div className={styles.containerButton}>
                {loadingButton ? (
                  <Button>
                    <img src={pokebola} alt="Pokebola" className={styles.pokebola} />
                  </Button>
                ) : (
                  <Button onClick={() => carregarPokemons()}>Carregar mais</Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
