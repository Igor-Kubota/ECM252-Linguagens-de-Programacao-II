var linguagem = "javascript";
console.log("Aprendendo" + linguagem);

//nome pode ser redeclarada
var linguagem = "java";
console.log("aprendendo, "+ linguagem);

//escopo nao restrito a bloco
var idade = 18;
//exibe undefined, ou seja, a variavel ja existe aqui
//  so nao teve valor atribuido.

//ela é içada - do ingles hoist - para fora do bloco if
console.log(`Oi, ${nome}`)
if (idade>=18){
    var nome = 'joao';
    console.log(`Parabens, ${nome}. Voce pode dirigir`);
}
//ainda existe aqui

console.log(`Até mais, ${nome}.`);