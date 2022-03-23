import Tilt from 'react-parallax-tilt';

import { Line } from 'rc-progress';

import { usePokemon } from 'hooks/usePokemon';

import { formatId } from 'utils/formatId';
import { formatName } from 'utils/formatName';
import { getColor } from 'utils/getColor';
import { getPokemonType } from 'utils/getPokemonType';

import { Ability, IProps } from 'types/all';

import backCard from 'assets/backCard.png';

import styles from './CardPokemon.module.scss';

export function CardPokemon(props: IProps) {
  const { pokemon, pokemonInfo } = props;

  const { flipCard, flipHorizontally } = usePokemon();

  return (
    <>
      {flipHorizontally ? (
        <div
          onClick={() => {
            flipCard({ target: { checked: false } });
          }}
        >
          <Tilt
            tiltEnable={true}
            glareEnable={true}
            glareMaxOpacity={0.6}
            glareColor="aliceblue"
            glarePosition="all"
            className={styles.parallaxEffect}
            flipHorizontally={flipHorizontally}
          >
            <div className={` ${styles.innerElement}`}>
              <img src={backCard} alt="Verso cardInfo" className={styles.cardVerso} />
            </div>
          </Tilt>
        </div>
      ) : (
        <div
          onClick={() => {
            flipCard({ target: { checked: true } });
          }}
        >
          <Tilt
            tiltEnable={true}
            glareEnable={true}
            glareMaxOpacity={0.6}
            glareColor="aliceblue"
            glarePosition="all"
            className={styles.parallaxEffect}
            flipHorizontally={flipHorizontally}
          >
            <div className={`${styles.card} ${styles.innerElement}`}>
              <div data-element={getPokemonType(pokemon)} className={`${styles.cardOpacity}`}>
                <div className={styles.name}>
                  <h2>{formatName(pokemon.name)}</h2>
                  <h2>{pokemon.stats[0].base_stat} HP</h2>
                </div>
                <div className={styles.pokemonImage}>
                  <div className={styles.id}>
                    <h2 className={styles.idText}>#{formatId(pokemon.id)}</h2>
                  </div>
                  <img
                    src={pokemon.sprites.other.dream_world.front_default || pokemon?.sprites?.front_default}
                    alt={pokemon.name}
                  />
                </div>
                <h2 className={styles.idText}>{pokemonInfo?.genera[0]?.genus}</h2>

                <div className={styles.cardInfo}>
                  <div className={styles.containerWidthHeight}>
                    <p>Peso: {pokemon.weight / 10}kg</p>
                    <p>Altura: {pokemon.height * 10}cm</p>
                  </div>

                  <div className={styles.wrapperHabilidades}>
                    <h2>Habilidades</h2>
                    <div className={styles.containerHabilidades}>
                      {pokemon?.abilities?.map((ability: Ability) => (
                        <p key={ability.ability.name} className={styles.habilidade}>
                          {formatName(ability.ability.name)}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className={styles.containerStats}>
                    <h2>Stats</h2>
                    <div className={styles.statsContainer}>
                      <p className={styles.statsParagraph}>{formatName(pokemon.stats[0].stat.name)}</p>
                      <p>{pokemon.stats[0].base_stat}</p>
                      <Line
                        className={styles.line}
                        percent={pokemon.stats[0].base_stat}
                        strokeColor={getColor(getPokemonType(pokemon))}
                        strokeWidth={4}
                        trailWidth={4}
                      />
                      <p>100</p>
                    </div>
                    <div className={styles.statsContainer}>
                      <p className={styles.statsParagraph}>{formatName(pokemon.stats[1].stat.name)}</p>
                      <p>{pokemon.stats[1].base_stat}</p>
                      <Line
                        className={styles.line}
                        percent={pokemon.stats[1].base_stat}
                        strokeColor={getColor(getPokemonType(pokemon))}
                        strokeWidth={4}
                        trailWidth={4}
                      />
                      <p>100</p>
                    </div>
                    <div className={styles.statsContainer}>
                      <p className={styles.statsParagraph}>{formatName(pokemon.stats[2].stat.name)}</p>
                      <p>{pokemon.stats[2].base_stat}</p>
                      <Line
                        className={styles.line}
                        percent={pokemon.stats[2].base_stat}
                        strokeColor={getColor(getPokemonType(pokemon))}
                        strokeWidth={4}
                        trailWidth={4}
                      />
                      <p>100</p>
                    </div>
                    <div className={styles.statsContainer}>
                      <p className={styles.statsParagraph}>{formatName(pokemon.stats[3].stat.name)}</p>
                      <p>{pokemon.stats[3].base_stat}</p>
                      <Line
                        className={styles.line}
                        percent={pokemon.stats[3].base_stat}
                        strokeColor={getColor(getPokemonType(pokemon))}
                        strokeWidth={4}
                        trailWidth={4}
                      />
                      <p>100</p>
                    </div>
                    <div className={styles.statsContainer}>
                      <p className={styles.statsParagraph}>{formatName(pokemon.stats[4].stat.name)}</p>
                      <p>{pokemon.stats[4].base_stat}</p>
                      <Line
                        className={styles.line}
                        percent={pokemon.stats[4].base_stat}
                        strokeColor={getColor(getPokemonType(pokemon))}
                        strokeWidth={4}
                        trailWidth={4}
                      />
                      <p>100</p>
                    </div>
                    <div className={styles.statsContainer}>
                      <p className={styles.statsParagraph}>{formatName(pokemon.stats[5].stat.name)}</p>
                      <p>{pokemon.stats[5].base_stat}</p>
                      <Line
                        className={styles.line}
                        percent={pokemon.stats[5].base_stat}
                        strokeColor={getColor(getPokemonType(pokemon))}
                        strokeWidth={4}
                        trailWidth={4}
                      />
                      <p>100</p>
                    </div>
                    <div className={styles.statsContainer}>
                      <p className={styles.statsParagraph}>Total</p>
                      <p>{pokemon.stats.reduce((acc: number, cur: { base_stat: number }) => acc + cur.base_stat, 0)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      )}
    </>
  );
}
