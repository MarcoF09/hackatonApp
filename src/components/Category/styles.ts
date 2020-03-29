import { StyleSheet } from 'react-native'
import { Palette } from '../../style/Palette'

export const styles = StyleSheet.create({
  basicContainer: { flex: 1 },
  boldText: {
    color: Palette.black,
    fontSize: 17,
    fontWeight: 'bold',
  },
  categoryName: { flex: 1, paddingLeft: 10, paddingTop: 10 },
  container: {
    height: 180,
    width: 200,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: Palette.clearGray,
  },
  image: { flex: 1, resizeMode: 'cover', height: 160, width: 200 },
  imageContainer: { flex: 3 },
  textContainer: { flex: 1, paddingLeft: 10, paddingTop: 10 },
  tagsContainer: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 10,
  },

  tagText: { color: Palette.gray },
})
