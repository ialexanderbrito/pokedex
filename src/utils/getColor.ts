export function getColor(type: string) {
  switch (type) {
    case 'bug':
      return '#befc14';

    case 'water':
      return '#01beff';

    case 'grass':
      return '#09ee4f';

    case 'fire':
      return '#ff8e01';

    case 'normal':
      return '#dcdbc4';

    case 'poison':
      return '#c901e6';

    case 'electric':
      return '#fdf800';

    case 'ground':
      return '#e3a010';

    case 'fairy':
      return '#ff8ad1';

    case 'fighting':
      return '#d10d1c';

    case 'psychic':
      return '#ff3ca0';

    case 'ghost':
      return '#7441c2';

    case 'rock':
      return '#93623a';

    case 'ice':
      return '#8afff9';

    case 'flying':
      return '#b2dfff';

    case 'dark':
      return '#012765';

    case 'dragon':
      return '#3813f6';

    case 'steel':
      return '#7ca8b8';

    case 'unknown':
      return '#dcdbc4';

    default:
      return '#dcdbc4';
  }
}
