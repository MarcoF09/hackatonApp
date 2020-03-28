import { Palette } from '../../../style/Palette'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Palette.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  description: {
    color: Palette.gray,
    fontSize: 14,
  },
  textContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: Palette.black,
    fontSize: 16,
  },
})
