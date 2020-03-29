import { StyleSheet } from 'react-native'
import { Palette } from '../../style/Palette'

export const styles = StyleSheet.create({
  imageContainer: { height: 150, margin: 15 },
  headerTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
    color: 'white',
    textAlign: 'center',
    textShadowColor: Palette.gray,
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
  },
})
