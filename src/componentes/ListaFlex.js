import React from 'react'
import {ScrollView,  View, FlatList, Text} from 'react-native'

const alunos = [
    {id: 1, nome: 'João', nota: 7.9},
    {id: 2, nome: 'Paulo', nota: 9},
    {id: 3, nome: 'Ana', nota: 10},
    {id: 4, nome: 'Liz', nota: 9.5},
    {id: 5, nome: 'Yara', nota: 9.9},
    {id: 6, nome: 'Claudia', nota: 5.5},
    {id: 7, nome: 'Ju', nota: 9.1},
    {id: 8, nome: 'João', nota: 7.9},
    {id: 9, nome: 'Paulo', nota: 9},
    {id: 10, nome: 'Ana', nota: 10},
    {id: 11, nome: 'Liz', nota: 9.5},
    {id: 12, nome: 'Yara', nota: 9.9},
    {id: 13, nome: 'Claudia', nota: 5.5},
    {id: 15, nome: 'Ju', nota: 9.1},
    {id: 16, nome: 'Liz', nota: 9.5},
    {id: 17, nome: 'Yara', nota: 9.9},
    {id: 18, nome: 'Claudia', nota: 5.5},
    {id: 19, nome: 'Ju', nota: 9.1},
]

const itemEstilo = {
    paddingHorizontal:15,
    height: 50,
    backgroundColor: '#000',
    borderWidht: 0.5,
    borderColor: '#222',
}

export const ALuno = props => 
    <View style= {itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style = {{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>


const Test = props => {
    const renderItems = ({item}) =>{
        return <ALuno {...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}
export default Test