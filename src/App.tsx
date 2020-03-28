import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import React from 'react'
import { RootNavigator } from './navigation/RootNavigator'
import { StatusBar } from 'react-native'
import { store } from './store'

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" />
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </Provider>
)

export default App
