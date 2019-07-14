import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import styles from '../library/style'

export default class Principal extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.whiteContainer}>
                    <View style={styles.whiteView}>
                        <Text style={styles.title}>Tela Principal</Text>
                    </View>
                </View>
            </View>
        )
    }
}

{/* <View style={styles.container}>
    <View style={styles.whiteContainer}>
        <View style={styles.whiteView}>
       
        </View>
    </View>
</View> */}


