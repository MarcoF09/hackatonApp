import { Palette } from '../../style/Palette'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  completed: {
    fontSize: 30,
  },
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
    color: Palette.gray,
    fontSize: 14,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: Palette.white,
    height: 80,
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  markAs: {
    color: Palette.pink,
    fontSize: 14,
    fontWeight: '500',
  },
  title: {
    color: Palette.black,
    fontSize: 36,
    marginBottom: 8,
  },
})
