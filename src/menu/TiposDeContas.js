import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import styles from '../library/style'

export default class TiposDeContas extends Component {
    static navigationOptions = {
        title:'TiposDeContas'
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.whiteContainer}>
                    <View style={styles.whiteView}>
                        <Button title='ProdutosDeCredito' style={styles.button} onPress={() => this.props.navigation.navigate('ProdutosDeCredito')} />
                        <Button title='CestaDeProdutos' style={styles.button} onPress={() => this.props.navigation.navigate('CestaDeProdutos')} />
                        <Button title='Conveniencia' style={styles.button} onPress={() => this.props.navigation.navigate('Conveniencia')} />
                        <Button title='Renegociacao' style={styles.button} onPress={() => this.props.navigation.navigate('Renegociacao')} />
                    </View>
                </View>
            </View>
            
        )
    }
}

// const styles = StyleSheet.create({
//     container:{
//         paddingTop:40
//     }
// })