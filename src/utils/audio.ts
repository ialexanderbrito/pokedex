const audio = (pokemon: string) => new Audio(`https://play.pokemonshowdown.com/audio/cries/${pokemon}.ogg`);

export function playAudio(pokemon: string) {
  audio(pokemon).play();
}
