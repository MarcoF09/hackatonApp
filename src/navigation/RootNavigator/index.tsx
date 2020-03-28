import { createStackNavigator } from '@react-navigation/stack'
import { HomeNavigator } from '../HomeNavigator'
import { NewTodo } from '../../scenes/NewTodo'
import React from 'react'
import { Route } from '../Route'
import { screenOptions } from '../screenOptions'

export const RootStack = createStackNavigator()

export const RootNavigator = () => (
  <RootStack.Navigator screenOptions={screenOptions} mode="modal">
    <RootStack.Screen
      component={HomeNavigator}
      name="HomeNavigator"
      options={{ headerShown: false }}
    />
    <RootStack.Screen component={NewTodo} name={Route.NEW_TODO} />
  </RootStack.Navigator>
)
