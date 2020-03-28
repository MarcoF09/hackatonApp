import { Palette } from '../../style/Palette'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: Palette.background,
    flex: 1,
  },
  content: {
    backgroundColor: Palette.white,
    padding: 16,
  },
  description: {
    fontSize: 14,
    height: 100,
    textAlignVertical: 'top',
  },
  title: {
    fontSize: 36,
    height: 60,
  },
})
