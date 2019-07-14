import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import styles from '../library/style'
import renderIf from '../library/renderIf'

export default class Renegociacao extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valor:'',
            Ponderador:0,
            PonderadorValue:1,
            qntDuteis:'', 
            renegociacaoResult:'',
            fator:1000,
            tipo:0,
            tipos:[
                {
                    name:'Renegociacao a vista',
                    value:2.5
                },
                {
                    name:'Regularizacao de parcelas',
                    value:2.5
                },
                {
                    name:'Renegociacao a prazo',
                    value:0.5
                }
            ]
        }
        this.calcular = this.calcular.bind(this)
        this.setTipoValue = this.setTipoValue.bind(this)
    }
    static navigationOptions = {
        title:Renegociacao
    }
    
    calcular() {
        this.setTipoValue(this.state.Ponderador)
        if(this.state.valor !== '' && this.state.qntDuteis !== '') {                
            alert(this.state.PonderadorValue)
            val = ((((this.state.valor * this.state.PonderadorValue) / this.state.fator) * 0.1) / this.state.qntDuteis).toFixed(2)                       
            this.setState({renegociacaoResult:val})                        
        }
    }

    setTipoValue(value) {
        this.state.Ponderador = value
        this.state.PonderadorValue = this.state.tipos[this.state.tipo].value
    }

    render() {
        let tiposPicker = this.state.tipos.map((v,k)=>{
            return <Picker.Item value={k} key={k} label={v.name} />
        })
        return(
            <View style={styles.container}>
                <View style={styles.whiteContainer}>
                    <View style={styles.whiteView}>
                        <Text style={styles.title}>Renegociação</Text>
                        <TextInput style={styles.TextInput} placeholder='Valor' keyboardType={"numeric"} onChangeText={(v) => this.setState({valor:v})} />
                        <TextInput style={styles.TextInput} placeholder='Dias úteis no mês' keyboardType={'numeric'} onChangeText={(v) => this.setState({qntDuteis:v})} /> 
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