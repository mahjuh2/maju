//calculadora de idade
/*console.log("está funcionando!");

let anoDeNascimento = window.prompt("Em que ano você nasceu?");
let anoDeHoje = 2023
let idade = anoDeHoje - anoDeNascimento
console.log(anoDeNascimento);
alert(" Quem nasceu em " + anoDeNascimento + " vai fazer " + idade + " em 2023 ");
*/

//-----------------------------------------------------------------------------//
//calculadora de nota usando a função prompt
//perguntar as notas e mostrar o resultado via função alert

let nota1 = parseFloat(window.prompt("Nota do primeiro trimestre: "));
console.log(nota1);
let nota2 = parseFloat(window.prompt("Nota do segundo trimestre: "));
console.log(nota2);
let nota3 = parseFloat(window.prompt("Nota do terceiro trimestre: "));
console.log(nota3);

let result = nota1 + nota2 + nota3;
alert ("nota dos trimestres: "+result+"");