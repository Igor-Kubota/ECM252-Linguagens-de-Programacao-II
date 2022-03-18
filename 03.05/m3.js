function fatorial (n){
    if (n<0){
        return Promise.reject("Valor não pode ser negativo")
    } 
    let res = 1
    for (let i=2;i<=n; i++){
        res *= i
    } 
    return Promise.resolve(res)
}

function chamadaComThenCatch(){
    fatorial(5)
            .then((res) =>{
                console.log(res)
            })
            .catch((res)=>{
                console.log(res)
            })
    fatorial(-1)
            .then((res) =>{
                console.log(res)
            })
            .catch((res)=>{
                console.log(res)
            })
}

//chamadaComThenCatch()




async function chamadaComAwait(){
    

    try{
        const f1 = await fatorial(6)
        console.log(f1)

        const f2 = await fatorial(-1)
        console.log(f2)
    }
    catch(err){
        console.log(err)
    }
}

chamadaComAwait()