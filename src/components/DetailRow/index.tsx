import React from 'react'
import { View, Text, Linking } from 'react-native'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export interface OuterProps {
  leftText: string
  rightText: string
}

export const DetailRow = ({ leftText, rightText }: OuterProps) => (
  <View style={styles.rowContainer}>
    <View style={styles.leftContainer}>
      <TouchableOpacity onPress={() => Linking.openURL(leftText)}>
        <Text style={styles.commonText}>{leftText}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.rightContainer}>
      <TouchableOpacity onPress={() => Linking.openURL(rightText)}>
        <Text style={styles.commonText}>{rightText}</Text>
      </TouchableOpacity>
    </View>
  </View>
)
