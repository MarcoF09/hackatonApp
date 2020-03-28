import { createStackNavigator } from '@react-navigation/stack'
import { Detail } from '../../scenes/Detail'
import { Home } from '../../scenes/Home'
import React from 'react'
import { Route } from '../Route'
import { screenOptions } from '../screenOptions'

export const HomeStack = createStackNavigator()

export const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={screenOptions}>
    <HomeStack.Screen component={Home} name={Route.HOME} />
    <HomeStack.Screen component={Detail} name={Route.DETAIL} />
  </HomeStack.Navigator>
)
