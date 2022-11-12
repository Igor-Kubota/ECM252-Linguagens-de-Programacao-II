import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListaPessoaComponent from '../components/PessoaListComponent'
import '@fortawesome/fontawesome-free/css/all.css'


const PessoaListTela = ({navigation}) => {
  return (
    <View style = {{padding: 40}}>
      <ListaPessoaComponent navigation={navigation}/>
    </View>
  )
}

export default PessoaListTela

const styles = StyleSheet.create({})