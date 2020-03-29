import { createStackNavigator } from '@react-navigation/stack'
import { HomeNavigator } from '../HomeNavigator'
import React from 'react'
import { screenOptions } from '../screenOptions'

export const RootStack = createStackNavigator()

export const RootNavigator = () => (
  <RootStack.Navigator screenOptions={screenOptions} mode="modal">
    <RootStack.Screen
      component={HomeNavigator}
      name="HomeNavigator"
      options={{ headerShown: false }}
    />
  </RootStack.Navigator>
)
