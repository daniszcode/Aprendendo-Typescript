function semRetorno(...args: string[]) {
  console.log('oi, eu sou o tipo void, sem retorno', args.join(''));
}

semRetorno('tarara ', 'underere,');

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();
