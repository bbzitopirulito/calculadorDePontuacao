import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

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

export default styles


  