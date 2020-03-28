import React, { useCallback, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { addTodo } from '../../store/actions/todos'
import { Separator } from '../../components/Separator'
import { styles } from './style'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useNavigationItems } from '../../hooks/useNavigationItems'

export const NewTodo = () => {
  const [title, setTitle] = useState<string | undefined>(undefined)
  const [description, setDescription] = useState<string | undefined>(undefined)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const createTodo = useCallback(() => {
    if (!title || !description) return

    dispatch(addTodo(title, description))
    navigation.goBack()
  }, [description, dispatch, navigation, title])
  useNavigationItems({
    onPressRight: createTodo,
    titleRight: 'Save',
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="Title"
          style={styles.title}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          multiline={true}
          placeholder="Description"
          style={styles.description}
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <Separator />
    </SafeAreaView>
  )
}
