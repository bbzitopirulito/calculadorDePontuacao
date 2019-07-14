import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import styles from '../library/style'

export default class CestaDeProdutos extends Component {
    static navigationOptions = {
        title:CestaDeProdutos
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.whiteContainer}>
                    <View style={styles.whiteView}>
                        <Text style={styles.title}>Cesta de Produtos</Text>
                    </View>
                </View>
            </View>
        )
    }
}