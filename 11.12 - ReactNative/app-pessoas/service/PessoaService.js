import axios from "axios";

const endpointPessoas = '/pessoas/'
const base = axios.create({
    baseURL: 'https://g3e99fc358a3389-hgdkill2pw98714z.adb.us-ashburn-1.oraclecloudapps.com/ords/admin'
})

const obterLista = () => {
    return base.get(endpointPessoas)
}

const cadastrarPessoa = (pessoa) => {
    return base.post(
    endpointPessoas,
    pessoa,
    {headers: {'Content-Type': 'application/json'}}
    )
}

export {obterLista, cadastrarPessoa}