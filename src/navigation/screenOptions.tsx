import { Platform, View } from 'react-native'
import { Palette } from '../style/Palette'
import React from 'react'

export const screenOptions = {
  headerBackImage: () =>
    Platform.select({ ios: <View style={{ marginLeft: 16 }} /> }),
  headerBackTitle: 'Cancel',
  headerStyle: {
    backgroundColor: Palette.white,
  },
  headerTintColor: Palette.black,
}
