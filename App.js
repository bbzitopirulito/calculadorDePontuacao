import React, { Component } from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import Contas from './src/menu/Contas'
import Principal from './src/menu/Principal'

const AppNavigator = createDrawerNavigator({
  Principal:{
    screen:Principal
  },
  Contas:{
    screen:Contas
  },
})

export default createAppContainer(AppNavigator)