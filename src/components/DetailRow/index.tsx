import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export interface OuterProps {
  leftText: string
  rightText: string
}

export const DetailRow = ({ leftText, rightText }: OuterProps) => (
  <View style={styles.rowContainer}>
    <View style={styles.leftContainer}>
      <Text style={styles.commonText}>{leftText}</Text>
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.commonText}>{rightText}</Text>
    </View>
  </View>
)
