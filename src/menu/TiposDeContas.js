import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'

export default class TiposDeContas extends Component {
    static navigationOptions = {
        title:'TiposDeContas'
    }
    render() {
        return(
            <View>
                <Button title='ProdutosDeCredito' onPress={() => this.props.navigation.navigate('ProdutosDeCredito')} />
                <Button title='CestaDeProdutos' onPress={() => this.props.navigation.navigate('CestaDeProdutos')} />
                <Button title='Conveniencia' onPress={() => this.props.navigation.navigate('Conveniencia')} />
                <Button title='Renegociacao' onPress={() => this.props.navigation.navigate('Renegociacao')} />
            </View>
        )
    }
}