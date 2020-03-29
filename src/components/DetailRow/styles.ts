import { Palette } from '../../style/Palette'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  commonText: {
    color: Palette.gray,
    fontSize: 14,
  },
  leftContainer: { flex: 1 },
  rightContainer: { flex: 1, alignItems: 'flex-end' },
  rowContainer: { flexDirection: 'row' },
})
