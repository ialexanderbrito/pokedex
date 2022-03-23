import { ClassAttributes, HTMLAttributes } from 'react';
import Tilt from 'react-parallax-tilt';

import { usePokemon } from 'hooks/usePokemon';

import backCard from 'assets/backCard.png';

import styles from './BackCard.module.scss';

export function BackCard(
  props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>,
) {
  const { flipHorizontally } = usePokemon();

  return (
    <div {...props}>
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
  );
}
