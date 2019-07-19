import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import styles from '../library/style'
import renderIf from '../library/renderIf'
import { HitTestResultTypes } from 'expo/build/AR';

export default class CestaDeProdutos extends Component {
    constructor(props){
        super(props)
        this.state = {            
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
                    name:'Pic 40',
                    value:0
                },
                {
                    name:'Pic 50',
                    value:0
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
                    name:'Seguro mini residencial R$ 89,90',
                    value:0
                },
                {
                    name:'Seguro mini residencial R$ 224,00',
                    value:0
                },
                {
                    name:'Seguro mini residencial R$ 238,80',
                    value:0
                },
                {
                    name:'Seguro auto',
                    value:2
                },
                {
                    name:'Seguro ap CEI',
                    value:2
                },
                {
                    name:'API uniclass CEI',
                    value:6
                },
                {
                    name:'Itau viva',
                    value:0
                },
                {
                    name:'Seguro cartão protegido',
                    value:1
                },
                {
                    name:'Seguro proteção familiar',
                    value:0
                }

            ],
            SpecialTypes: [
                {
                    name:'Ponderador potencial'
                },
                {
                    name:'Ponderador não potencial'
                }
            ],
            picker1Index:0,
            picker2Index:0,
            showPicker2:false,
            ponderadorValue:'',
            CestaDeProdutosResult:''            
        }
        this.setPicker2 = this.setPicker2.bind(this)
        this.calcular = this.calcular.bind(this)
        this.setPonderadorFinal = this.setPonderadorFinal.bind(this)
    }
    static navigationOptions = {
        title:CestaDeProdutos
    }

    calcular() {
        this.setPonderadorFinal(this.state.picker1Index)
        alert(this.state.ponderadorValue)
    }

    setPonderadorFinal(value) {     
        if(this.state.picker2Index === 1) {
            this.state.ponderadorValue = 0.5
        } else {
            if(value !== 0 && value !== 9 && value !== 10 && value !== 17 && value !== 18 && value !== 19 && value !== 21) {
                let pv = 0                
                switch(value) {
                    case 1:
                    case 15:
                    case 16:
                    case 20:
                        pv = 2
                        break
                    case 2:                    
                    case 3 :
                    case 11:
                    case 13:
                        pv = 3
                        break
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        pv = 4
                        break                    
                    case 12:                        
                    case 22:
                        pv = 6
                        break
                    case 14:
                        pv = 1
                        break
                }
                this.state.ponderadorValue = pv
            } else {
                this.state.ponderadorValue = this.state.Ponderador[this.state.picker1Index].value
            }
        }
        
    }

    setPicker2(value) {
        this.state.picker1Index = value        

        if(value !== 0 && value !== 9 && value !== 10 && value !== 17 && value !== 18 && value !== 19 && value !== 21) {
            this.state.showPicker2 = true
        } else {
            this.state.showPicker2 = false
            this.state.picker2Index = 0
        }
    }
    render() {
        let tiposPicker1 = this.state.Ponderador.map((v,k) => {
            return <Picker.Item value={k} key={k} label={v.name} />
        })
        let tiposPicker2 = this.state.SpecialTypes.map((v,k)=>{
            return <Picker.Item value={k} key={k} label={v.name} />
        })
        return(
            <View style={styles.container}>
                <View style={styles.whiteContainer}>
                    <View style={styles.whiteView}>
                        <Text style={styles.title}>Cesta de Produtos</Text>                        
                        <Picker
                            selectedValue={this.state.picker1Index}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex)=> {
                                this.setState({picker1Index:itemValue})
                                this.setPicker2(itemValue)
                            }}>
                            {tiposPicker1}
                        </Picker>
                        {renderIf(this.state.showPicker2,
                            <Picker
                                selectedValue={this.state.picker2Index}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex)=>this.setState({picker2Index:itemValue})  
                            }>
                            {tiposPicker2}
                        </Picker>    
                        )}
                        <View style={styles.button}>
                            <Button title="CALCULAR" onPress={this.calcular}  /> 
                        </View>
                        {/* {renderIf(this.state.renegociacaoResult !== '' && this.state.valor !== '',
                            <View style={styles.resultView}>
                                <Text style={styles.result}>{this.state.renegociacaoResult.replace('.',',')}</Text>
                            </View>
                        )} */}
                    </View>
                </View>
            </View>
        )
    }
}