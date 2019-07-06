import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      valor1:'Valor',
      tipo1:'Tipo',
      Hmo:'Hmo',
      tipo2:'Tipo',
      tipo3:'Tipo3',
      valor2:'Valor',
      tipo4:'Tipo',
      nrVendas:'Nº Vendas'
    }
    this.calcular = this.calcular.bind(this)
  }
  calcular() {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.whiteContainer}>
          <View style={styles.whiteView}>
            <View style={styles.componentView}>
              <Text style={styles.title}>Produto do Crédito</Text>
              <TextInput style={styles.TextInput} value={this.state.valor1} onChangeText={(v)=>this.setState({valor1:v})} />
              <TextInput style={styles.TextInput} value={this.state.tipo1} onChangeText={(v)=>this.setState({tipo1:v})} />
              <TextInput style={styles.TextInput} value={this.state.Hmo} onChangeText={(v)=>this.setState({Hmo:v})} />
            </View>
            <View style={styles.componentView}>
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
            </View>
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
  }
})
