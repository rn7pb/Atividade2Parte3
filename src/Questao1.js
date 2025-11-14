
// Questão 1
const produtosJSON = `{
  "itens": [
    {
      "id": 1,
      "nome": "Notebook Gamer",
      "preco": 2999.99,
      "categoria": "eletronicos",
      "tags": ["tecnologia", "computacao", "gamer"]
    },
    {
      "id": 2, 
      "nome": "Mesa Escritório",
      "preco": 450.50,
      "categoria": "moveis",
      "tags": ["escritorio", "madeira", "profissional"]
    }
  ]
}`;

function formatarProdutos(jsonString) {
  const dados = JSON.parse(jsonString);
  const lista = [];

  for (let item of dados.itens) {
    lista.push(`${item.nome} - R$ ${item.preco.toFixed(2)} (Categoria: ${item.categoria})`);
  }

  return lista;
}

console.log(formatarProdutos(produtosJSON));
