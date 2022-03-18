/*uma função pode ser atribuída
 a uma variável*/
let umaFuncao = function () {
    console.log("Fui armazenada em uma variável");
}
//e pode ser chamada assim
umaFuncao()
/*f recebe uma função como parâmetro e, por isso
é uma função de alta ordem.
 Por devolver uma função, g também é de alta ordem.
 */
function f(funcao) {
    //chamando a função
    //note como a tipagem dinâmica tem seu preço
    funcao()
}
function g() {
    function outraFuncao() {
        console.log("Fui criada por g");
    }
    return outraFuncao;
}
//f pode ser chamada assim
f(function () {
    console.log('Estou sendo passada para f')
})
//e g pode ser chamada assim
const gResult = g()
gResult()
//e assim também
g()()
//outros testes
/* f chama g, que somente devolve uma função.
Nada é exibido.*/
f(g)
/*f chama a função devolvida por g.
"Fui criada por g" é exibido.*/
f(g())
/*f tenta chamar o que a função criada por g
devolve. Ela não devolve coisa alguma. Por isso,
um erro - somente em tempo de execução - acontece. */
f(g()())
//O que acontece?
f(1)
