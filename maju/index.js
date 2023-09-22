//cria a variável para armazenar o valor da nota do primeiro trimestre
let nota1Trim = parseFloat(document.querySelector(".trim1").textContent);
//console apenas para fins de teste
console.log(nota1Trim);
//cria a variável para armazenar o valor da nota do segundo trimestre
let nota2Trim = parseFloat(document.querySelector(".trim2").textContent);
//console apenas para fins de teste
console.log(nota2Trim);
//cria a variável para armazenar o valor da nota do terceiro trimestre
let nota3Trim = parseFloat(document.querySelector(".trim3").textContent);
//console apenas para fins de teste
console.log(nota3Trim);

//faz a soma das notas e armazena na variável resultado
let resultado = nota1Trim + nota2Trim + nota3Trim;
//mostra no console para fins de teste
console.log(resultado);

//cria a variável e armazena o conteúdo do resultado-final
let resultadoFinal = document.querySelector(".resultado-final");

if(resultado >= 180){
    //se for maior que 180 aparece como aprovado
    resultadoFinal.textContent = "Sim, parabéns!";
} else {
    //se não, aparece como reprovado e mostra quanto precisa para passar 
    let notaNecessaria = 180-(nota1Trim+nota2Trim);
    resultadoFinal.textContent = "Não foi aprovado! ainda precisa de " + notaNecessaria + " no terceiro trimestre para ser aprovado"

}