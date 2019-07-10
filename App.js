import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import renderIf from './renderIf'
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';
import { black } from 'ansi-colors';
export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      valor1:'Valor',
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
    // if()
    val = (this.state.valor1 * (this.state.NorRvalue / this.state.fator)).toFixed(3)
    // alert(`valor = ${val}, NorRvalue = ${this.state.NorRvalue}, Fator = ${this.state.fator}, Valor = ${this.state.valor1}`)
    this.setState({produtoCreditoResult:val})
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
              {/* <TextInput style={styles.TextInput} value={this.state.tipo1} onChangeText={(v)=>this.setState({tipo1:v})} /> */}
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
            {/* <View style={styles.componentView}>
              <Text style={styles.title}>Cesta do Produto</Text>
              <TextInput style={styles.TextInput} value={this.state.tipo2} onChangeText={(v)=>this.setState({tipo2:v})} />
            </View>
            <View style={styles.componentView}>
              <Text style={styles.title}>Conveniência</Text>
              <TextInput style={styles.TextInput} value={this.state.tipo3} onChangeText={(v)=>this.setState({tipo3:v})} />
            </View>
            <View style={styles.componentView}>
              <Text style={styles.title}>Renegociação</Text>
              <TextInput style={styles.TextInput} value={this.state.valor2} onChangeText={(v)=>this.setState({valor2:v})} />
              <TextInput style={styles.TextInput} value={this.state.tipo4} onChangeText={(v)=>this.setState({tipo4:v})} />
            </View>
            <View style={styles.componentView}>
              <TextInput style={styles.TextInput} value={this.state.nrVendas} onChangeText={(v)=>this.setState({nrVendas:v})} />
            </View> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,114,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:25,
    fontWeight:'bold',
    color:"black"
  }, 
  whiteContainer: {
    marginTop:30,
    width:360,
    height:750,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10
  },
  TextInput: {
    marginTop:10,
    width:300,
    height:40,
    backgroundColor:'#fff',
    alignSelf:'center',
    borderColor:'#E8E8E8',
    borderWidth:2,
    borderRadius:10,
    textAlign:'center'
  },
  componentView: {
    
  },
  whiteView: {
    paddingBottom:50
  },
  button: {
    marginTop:60
  }, 
  picker:{
    
  },
  result:{
    alignSelf:'center',
    fontSize:45,
    fontWeight:'bold',
    color:"black"
  },
  resultView:{
    marginTop:50,
    height:100,
    width:200,
    alignSelf:'center'    
  }
})
