// import React, { Component } from 'react'
// import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native'

// export default class Contas extends Component {
//     render() {
//         return(
//             <View>
//                 <Text>Contas</Text>
//             </View>
//         )
//     }
// }

import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import ProdutosDeCredito from '../calculuses/ProdutosDeCredito'
import Conveniencia from '../calculuses/Conveniencia'
import CestaDeProdutos from '../calculuses/CestaDeProdutos'
import Renegociacao from '../calculuses/Renegociacao'
import TiposDeContas from './TiposDeContas'

const AppNavigator = createStackNavigator({
    TiposDeContas:{
        screen:TiposDeContas
    },
    ProdutosDeCredito:{
        screen:ProdutosDeCredito
    },
    CestaDeProdutos:{
        screen:CestaDeProdutos
    },
    Conveniencia:{
        screen:Conveniencia
    },
    Renegociacao:{
        screen:Renegociacao
    }
},    
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }    
)

export default createAppContainer(AppNavigator)