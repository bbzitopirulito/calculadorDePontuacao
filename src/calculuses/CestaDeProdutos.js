import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import styles from '../library/style'

export default class CestaDeProdutos extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor:'',
            Ponderador: [
                {
                    name:'Pacote de serviço',
                    value: 1                    
                },
                {
                    name:'Pic 30',
                    value: 0
                },
                {
                    name:'Pic 70',
                    value:0
                },
                {
                    name:'Pic 80',
                    value:0
                },
                {
                    name:'Pic 90',
                    value:0
                },
                {
                    name:'Pic 120',
                    value:0
                },
                {
                    name:'EMP4',
                    value:0
                },
                {
                    name:'Pic parcela única(IU) CEI',
                    value:0.2
                },
                {
                    name:'Pic não correntista',
                    value:0.2
                },
                {
                    name:'Seguro viva saudavel',
                    value:0
                },
                {
                    name:'Seguro viva familia',
                    value:0
                },
                {
                    name:'Ap senior',
                    value:0
                },
                {
                    name:'Seguro mini residencial R$ 89,9',
                    value:0
                },
                {
                    name:'Seguro mini residencial R$ 224 e 238,80',
                    value:0
                },
                {
                    name:'Pic 70',
                    value:0
                },
                {
                    name:'Pic 70',
                    value:0
                },
                {
                    name:'Pic 70',
                    value:0
                },

            ]
        }
    }
    static navigationOptions = {
        title:CestaDeProdutos
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.whiteContainer}>
                    <View style={styles.whiteView}>
                        <Text style={styles.title}>Cesta de Produtos</Text>
                        <TextInput style={styles.TextInput} placeholder='Quantidade de produtos do tipo determinado' keyboardType={"numeric"} onChangeText={(v) => this.setState({valor:v})} />                        
                        <Picker
                            selectedValue={this.state.Ponderador}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex)=> {
                                this.setState({tipo:itemValue})
                                this.setTipoValue(itemValue)
                            }}>
                            {tiposPicker}
                        </Picker>
                        <View style={styles.button}>
                            <Button title="CALCULAR" onPress={this.calcular}  /> 
                        </View>
                        {renderIf(this.state.renegociacaoResult !== '' && this.state.valor !== '',
                            <View style={styles.resultView}>
                                <Text style={styles.result}>{this.state.renegociacaoResult.replace('.',',')}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        )
    }
}