export function formatName(nome: string) {
  return nome
    ?.split('-')
    ?.map((nome) => nome?.charAt(0).toUpperCase() + nome?.slice(1))
    ?.join(' ');
}
