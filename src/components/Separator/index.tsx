import { StyleSheet, View } from 'react-native'
import { Palette } from '../../style/Palette'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.separator,
    height: 2,
    width: '100%',
  },
})

export const Separator = () => <View style={styles.container} />
