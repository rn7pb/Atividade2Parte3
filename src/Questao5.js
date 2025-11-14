
// Questão 5
const queryString = "categoria=eletronicos&preco=500&marca=samsung&avaliacao=4.5";

function parseQueryString(query) {
  const pares = query.split("&");
  const resultado = {};

  for (let p of pares) {
    const [chave, valor] = p.split("=");
    const num = Number(valor);
    resultado[chave] = isNaN(num) ? valor : num;
  }

  return resultado;
}

console.log(parseQueryString(queryString));
