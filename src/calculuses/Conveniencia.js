import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import styles from '../library/style'

export default class Conveniencia extends Component {
    static navigationOptions = {
        title:Conveniencia
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.whiteContainer}>
                    <View style={styles.whiteView}>
                    <Text style={styles.title}>Conveniência</Text>
                    </View>
                </View>
            </View>
        )
    }
}