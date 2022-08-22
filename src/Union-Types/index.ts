function AddOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  // if (typeof a === 'string' && typeof b === 'string') return a + b;
  return `${a} ${b}`;
}

console.log(AddOrConcat(5, 's'));
console.log(AddOrConcat('5', 's'));
console.log(AddOrConcat(5, 5));

//union-types refere-se ao caracter |, usa-se quando é necessario utilizar varios tipos em um mesmo contexto //
