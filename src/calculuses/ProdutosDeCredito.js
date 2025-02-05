import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import renderIf from '../library/renderIf'
import styles from '../library/style'
export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      valor1:'',
      tipo1:0,
      fator:1,
      NorR:0,         
      NorRvalue:1,
      calcularPressed:false,
      produtoCreditoResult:'',
      SpecialTypes:[
        {
          name:'Refinanciado',          
        },
        {
          name:'Novo'
        }
      ],
      Hmo:'Hmo',
      tipo2:'Tipo',
      tipo3:'Tipo3',
      valor2:'Valor',
      tipo4:'Tipo',
      nrVendas:'Nº Vendas',
      tipos: [
        {                    
          name:'Consignado EP/OP ',
          value:0          
        },
        {          
          name:'Consignado INSS',
          value:0           
        },
        {          
          name:'Crediario com Seguro',
          value:1.5          
        },
        {          
          name:'Crediario INSS',
          value:1.5          
        },
        {          
          name:'Crediario Sem Seguro',
          value:1          
        },
        {          
          name:'Lis',
          value:1          
        },
        {          
          name:'Parcelamento de Fatura',
          value:1          
        }
      ]
    }
    this.calcular = this.calcular.bind(this)    
    this.NorRSet = this.NorRSet.bind(this)
    this.definirFator = this.definirFator.bind(this)
  }
  calcular() {
    this.definirFator(this.state.tipo1)    
    this.NorRSet(this.state.NorR)    
    if(this.state.valor1 !== '') {
      val = ((this.state.valor1 * (this.state.NorRvalue / this.state.fator)) * (40/100)).toFixed(2)
      this.setState({produtoCreditoResult:val})
    }
    // alert(`valor = ${val}, NorRvalue = ${this.state.NorRvalue}, Fator = ${this.state.fator}, Valor = ${this.state.valor1}`)
    // alert(this.state.valor1 + " " + this.state.tipos[this.state.tipo1].name + ' ' + this.state.NorRvalue)
  }

  definirFator(value) {
    if(value === 0 || value === 1) {
      this.state.fator = 5000
    } else if(value === 2 || value === 3 || value === 4) {
      this.state.fator = 1000
    } else if(value === 5) {
      this.state.fator = 1000
    } else if(value === 6) {
      this.state.fator = 100
    }
  }

  NorRSet(value) {    
    // if(this.state.NorR === value)     {
      this.state.NorR = value
    // }
    // alert(this.state.NorR)

    let tipo1L = this.state.tipo1
    if(tipo1L == 0 || tipo1L == 1){
      if(tipo1L == 0) {
        if(this.state.NorR == 0) {
          this.state.NorRvalue = 1
        } else if(this.state.NorRvalue == 1){
          this.state.NorRvalue = 2.5
        }
      }else if(tipo1L == 1) {
        if(this.state.NorR == 0) {
          this.state.NorRvalue = 1.5
        } else if(this.state.NorRvalue == 1){
          this.state.NorRvalue = 4.5
        }
      }
    } else {      
      this.state.NorRvalue = this.state.tipos[tipo1L].value            
    }   

  }
  
  render() {
    let tiposPicker1 = this.state.tipos.map((v,k) => {
      return <Picker.Item value={k} key={k} label={v.name} />
    })
    let SpecialTypesPicker = this.state.SpecialTypes.map((v,k) => {
      return <Picker.Item value={k} key={k} label={v.name} />
    })
    return (
      <View style={styles.container}>
        <View style={styles.whiteContainer}>
          <View style={styles.whiteView}>
            <View style={styles.componentView}>
              <Text style={styles.title}>Produto do Crédito</Text>
              <TextInput style={styles.TextInput} placeholder="Valor" keyboardType={'numeric'} onChangeText={(v)=>this.setState({valor1:v})} />              
              <Picker
                selectedValue={this.state.tipo1}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({tipo1:itemValue})}>
                {tiposPicker1}
              </Picker>
              {
                renderIf(this.state.tipo1 == 0 || this.state.tipo1 == 1,  
              <Picker
                selectedValue={this.state.NorR}
                style={styles.picker}
                onValueChange={((itemValue,itemKey) => {
                  this.setState({NorR:itemValue})
                  this.NorRSet(itemValue)
                })}>
                {SpecialTypesPicker}
              </Picker>
              )}              
            </View>
            <View style={styles.button}>
              <Button title='CALCULAR' onPress={this.calcular}/>
            </View>
            {renderIf(this.state.produtoCreditoResult !== '' && this.state.valor1 !== '' ,
            <View style={styles.resultView}>
              <Text style={styles.result} >{this.state.produtoCreditoResult.replace('.', ',')}</Text>
            </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}
