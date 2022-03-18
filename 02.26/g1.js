function hello(){
    console.log('oi')
}
hello()

//cuidado ,  aqui redefinimos a função sem parametro
function hello(nome){
    console.log('Hello, ' + nome)

}
hello('igor')

function soma(a,b){
    return a+b
}
const res = soma(2,3)
console.log(res)