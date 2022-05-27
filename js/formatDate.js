// Escreva uma função que converta a data de entrada do usuário formatada como MM/DD/YYYY em um formato 
// exigido por uma API (YYYYMMDD). O parâmetro "userDate" e o valor de retorno são strings.

// Por exemplo, ele deve converter a data de entrada do usuário "31/12/2014" em "20141231" adequada para a API.

let userDate = new Date();

function formatDate(userDate) {
  let newDate = new Date(userDate);
  return `${newDate.getFullYear()}${newDate.getMonth()}${newDate.getDate()}`;
}

console.log(formatDate("12/31/2014"));

// FEITO