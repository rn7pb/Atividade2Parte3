
// Questão 2
const texto = "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";

function analisarTexto(texto) {
  const palavras = texto
    .replace(/[.,]/g, "")
    .split(" ")
    .filter(p => p.length > 0);

  const totalPalavras = palavras.length;

  const frequencia = {};
  for (let palavra of palavras) {
    frequencia[palavra] = (frequencia[palavra] || 0) + 1;
  }

  const listaFrequencia = Object.keys(frequencia).map(p => ({
    palavra: p,
    frequencia: frequencia[p]
  }));

  const tamanhoTotal = palavras.reduce((soma, p) => soma + p.length, 0);
  const tamanhoMedioPalavras = (tamanhoTotal / totalPalavras).toFixed(1);

  return {
    totalPalavras,
    frequenciaPalavras: listaFrequencia,
    tamanhoMedioPalavras
  };
}

console.log(analisarTexto(texto));
