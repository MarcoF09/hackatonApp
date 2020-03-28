import { Text, View } from 'react-native'
import { getBundleId } from 'react-native-device-info'
import React from 'react'
import { styles } from './styles'

export const ListFooter = () => (
  <View style={styles.container}>
    <Text>{getBundleId()}</Text>
  </View>
)
