function exemplos(
  tiponull: null,
  tipounedfined?: string,
): {
  tiponull: null;
  tipounedfined?: string;
} {
  return {
    tiponull,
    tipounedfined,
  };
}

function criaErro(): Never {
  throw new Error('tipo never comumente é usado para lançamentos de erro');
}

criaErro();
