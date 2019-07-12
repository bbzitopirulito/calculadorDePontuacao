import React, { Component } from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import Contas from './src/menu/Contas'
import Principal from './src/menu/Principal'

const AppNavigator = createDrawerNavigator({
  Contas:{
    screen:Contas
  },
  Principal:{
    screen:Principal
  },
})

export default createAppContainer(AppNavigator)