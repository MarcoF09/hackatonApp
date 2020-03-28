import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import React, { useCallback, useMemo } from 'react'
import checkboxActiveIcon from '../../../assets/checkboxActive.png'
import checkboxInactiveIcon from '../../../assets/checkboxInactive.png'
import { styles } from './style'
import { Todo } from '../../../types/todo'
import { toggleTodo } from '../../../store/actions/todos'
import { useDispatch } from 'react-redux'

interface Touchable {
  onPress: () => void
}

export type Props = Todo & Touchable

export const TodoItem = ({
  id,
  title,
  description,
  completed,
  onPress,
}: Props) => {
  const icon = useMemo(
    () => (completed ? checkboxActiveIcon : checkboxInactiveIcon),
    [completed],
  )
  const dispatch = useDispatch()
  const onToggleTodo = useCallback(() => {
    dispatch(toggleTodo(id))
  }, [dispatch, id])

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onToggleTodo}>
        <Image source={icon} />
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  )
}
