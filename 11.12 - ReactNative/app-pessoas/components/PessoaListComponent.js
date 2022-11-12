import React from 'react'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { FAB } from '@rneui/themed'
import { LinearProgress, ListItem } from '@rneui/themed'
import * as pessoaService from '../service/PessoaService'
import '@fortawesome/fontawesome-free/css/all.css'


const ListaPessoaComponent = ({ navigation }) => {
    const updateList = async () => {
        const compareFn = (a, b) => {
            return a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0
        }
        setPessoas((await pessoaService.obterLista()).data.items.sort(compareFn))
    }
    const onRefresh = async () => {
        setRefreshing(true)
        await updateList()
        setRefreshing(false)
    }
    const [pessoas, setPessoas] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    useEffect(() => {
        const go = async () => {
            await updateList()
        }
        go()
    }, [])

    return (
        <View>
            {
                pessoas.length > 0 ?
                    <>
                        <FlatList
                            onRefresh={onRefresh}
                            refreshing={refreshing}
                            renderItem={(pessoa) => (
                                <ListItem
                                    bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title>{pessoa.item.nome}</ListItem.Title>
                                        <ListItem.Subtitle>{pessoa.item.hobby}</ListItem.Subtitle>
                                    </ListItem.Content>
                                    {/* pronúncia: chévron. tradução: divisa */}
                                    <ListItem.Chevron />
                                </ListItem>
                            )}
                            data={pessoas}
                        />
                        <FAB
                            icon={{ color: 'white', name: "add" }}
                            placement='right'
                            onPress={() => { navigation.navigate('PessoaAdd', { onGoBack: updateList }) }}
                        />
                    </>
                    :
                    <LinearProgress />
            }
        </View>
    )
}
export default ListaPessoaComponent


