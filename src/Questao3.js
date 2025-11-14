
// Questão 3
const usuariosJSON = `[
  {"nome": " carlos silva ", "email": "CARLOS@EMAIL.COM", "idade": "25"},
  {"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
  {"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;

function normalizarUsuarios(json) {
  const usuarios = JSON.parse(json);

  return usuarios.map(u => {
    const nomeTrim = u.nome.trim().toLowerCase().split(" ");
    const nomeFormatado = nomeTrim.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");

    const email = u.email.toLowerCase();

    const idade = Number(u.idade);
    const maiorDeIdade = idade >= 18;

    return {
      nome: nomeFormatado,
      email: email,
      idade: idade,
      maiorDeIdade: maiorDeIdade
    };
  });
}

console.log(normalizarUsuarios(usuariosJSON));
