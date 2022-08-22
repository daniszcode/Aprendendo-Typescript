function escolheCasa(
  Casas: 'Grifinoria' | 'Lufa-Lufa' | 'Sonserina' | 'Corvinal',
): string {
  return Casas;
}

console.log(
  'Funções literais mostram seu tipo de forma declarativa, implicita e literal, a proposito minha casa só poderia ser: ',
  escolheCasa('Corvinal'),
  escolheCasa(''),
);

const geminialidadesWesley = {
  gemeoUm: 'Fred' as const,
  gemeoDois: 'Jorge' as const,
};
