import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'
import renderIf from './renderIf'
export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      valor1:'Valor',
      tipo1:0,
      NorR:'Refinanciado',   
      NorRvalue:0,   
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
  }
  calcular() {
    alert(this.state.valor1 + " " + this.state.tipos[this.state.tipo1].name + ' ' + this.state.NorRvalue)
  }

  NorRSet(value) {
    this.setState({NorR:value})
    alert(value)
    if(this.state.tipo1 == 0 && this.state.NorR == 0){
      this.setState({NorRvalue:1})
    }
    if(this.state.tipo1 == 0 && this.state.NorR == 1) {
      this.setState({NorRvalue:2.5})
    }
    if(this.state.tipo1 == 1 && this.state.NorR == 0) {
      this.setState({NorRvalue:1.5})
    }
    if(this.state.tipo1 == 1 && this.state.NorR == 1) {
      this.setState({NorRvalue:4.5})
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
                onValueChange={((itemValue,itemKey) => this.NorRSet(itemValue))}>
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
    
  }
})
