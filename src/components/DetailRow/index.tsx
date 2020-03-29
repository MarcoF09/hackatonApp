import React from 'react'
import { View, Text, Linking } from 'react-native'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { noop } from 'lodash'

export interface OuterProps {
  leftText: string
  rightText: string
  rightUrl?: string
  leftUrl?: string
}

export const DetailRow = ({
  leftText,
  rightText,
  rightUrl,
  leftUrl,
}: OuterProps) => (
  <View style={styles.rowContainer}>
    <View style={styles.leftContainer}>
      <TouchableOpacity
        onPress={!!leftUrl ? () => Linking.openURL(leftUrl) : noop}
      >
        <Text style={styles.commonText}>{leftText}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.rightContainer}>
      <TouchableOpacity
        onPress={!!rightUrl ? () => Linking.openURL(rightUrl) : noop}
      >
        <Text style={styles.commonText}>{rightText}</Text>
      </TouchableOpacity>
    </View>
  </View>
)
