import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import styles from '../library/style'
import renderIf from '../library/renderIf'

export default class Conveniencia extends Component {
    constructor(props){
        super(props)
        this.state = {
            tipos: [
                {                    
                  name:'Biometria',
                  value:0.5          
                },
                {          
                  name:'Débito automático',
                  value:2           
                },
                {          
                  name:'DDA',
                  value:1          
                },
                {          
                  name:'Cadastramento de senha eletrônica',
                  value:1         
                },
                {          
                  name:'Vinculacão INSS',
                  value:8          
                },
                {          
                  name:'Fatura digital',
                  value:1     
                }
            ],
            picker1Index:0,
            PonderadorValue:0,
            ConvenienciaResult:''
        }
        this.calcular = this.calcular.bind(this)
        this.setPonderadorValue = this.setPonderadorValue.bind(this)
    }

    calcular() {
        this.setPonderadorValue()
        val = (this.state.PonderadorValue * (15/100)).toFixed(2)
        this.setState({ConvenienciaResult:val})
    }

    setPonderadorValue() {
        this.state.PonderadorValue = this.state.tipos[this.state.picker1Index].value
    }

    static navigationOptions = {
        title:Conveniencia
    }
    render() {
        let tiposPicker1 = this.state.tipos.map((v,k) =>{
            return <Picker.Item value={k} key={k} label={v.name} />
        })
        return(
            <View style={styles.container}>
                <View style={styles.whiteContainer}>
                    <View style={styles.whiteView}>
                        <Text style={styles.title}>Conveniência</Text>
                        <Picker
                            selectedValue={this.state.picker1Index}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex)=> {
                                this.setState({picker1Index:itemValue})                                
                            }}>
                            {tiposPicker1}
                        </Picker>
                        <View style={styles.button}>
                            <Button title="CALCULAR" onPress={this.calcular}  /> 
                        </View>
                        {renderIf(this.state.ConvenienciaResult !== '',
                            <View style={styles.resultView}>
                                <Text style={styles.result}>{this.state.ConvenienciaResult.replace('.',',')}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        )
    }
}