import { StyleSheet, Text, View, ToastAndroid } from 'react-native'
import { React, useState } from 'react'
import { Button, Card, Input } from '@rneui/themed'
import '@fortawesome/fontawesome-free/css/all.css'

import * as pessoaService from '../service/PessoaService'


const PessoaAddComponent = ({navigation}) => {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [hobby, setHobby] = useState('')

    const addPessoa = async () =>{
        try {
            const res = await pessoaService.cadastrarPessoa({nome,idade,hobby})
            console.log(res)
            ToastAndroid.show('Pessoa Cadastrada com Sucesso', 2000)
        } catch (erro) {
            console.log('erro', erro)
            ToastAndroid.show('Falha. Tente novamente mais tarde',2000)
        }
        navigation.goBack()
    }
  return (
    <>
    <Card containerStyle={styles.card}>
        <Card.Title>Cadastro de Pessoa</Card.Title>
        <Card.Divider></Card.Divider>
        <Input 
            placeholder='Nome'
            leftIcon={{type: 'font-awesome', name:'user'}}
            style={styles.textInput}
            onChangeText= {(nome) => setNome(nome)}
        />

        <Input 
            placeholder='Idade'
            leftIcon={{type: 'font-awesome', name:'info'}}
            style={styles.textInput}
            onChangeText= {(idade) => setIdade(idade)}
        />

        <Input 
            placeholder='Hobby'
            leftIcon={{type: 'font-awesome', name:'heart'}}
            style={styles.textInput}
            onChangeText= {(hobby) => setHobby(hobby)}
        />
        <Button
            title = "OK"
            buttonStyle = {styles.button}
            onPress={() => addPessoa()}
        />
    </Card>
    </>
  )
}

export default PessoaAddComponent

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 8
    },
    card:{
        padding:8,
        borderRadius:8
    },
    textInput:{
        textAlign:'center',
        margin:0,
        padding:0
    }
})