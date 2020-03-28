import { Palette } from '../../style/Palette'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: Palette.background,
    flex: 1,
  },
  right: {
    color: Palette.white,
    fontSize: 18,
  },
  rightContainer: {
    marginRight: 8,
  },
})
