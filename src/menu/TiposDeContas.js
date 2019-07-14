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
                        <View style={styles.button}>
                            <Button title='ProdutosDeCredito' onPress={() => this.props.navigation.navigate('ProdutosDeCredito')} />
                        </View>
                        <View style={styles.button}>
                            <Button title='CestaDeProdutos' onPress={() => this.props.navigation.navigate('CestaDeProdutos')} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Conveniencia' onPress={() => this.props.navigation.navigate('Conveniencia')} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Renegociacao' onPress={() => this.props.navigation.navigate('Renegociacao')} />
                        </View>
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