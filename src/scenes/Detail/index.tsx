import React, { useCallback, useMemo } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { RootState } from 'src/store'
import { Separator } from '../../components/Separator'
import { styles } from './styles'
import { Todo } from 'src/types/todo'
import { toggleTodo } from '../../store/actions/todos'
import { useRoute } from '@react-navigation/native'

const makeTodosWithIdSelector = () =>
  createSelector<RootState, number, Todo[], number, Todo | undefined>(
    state => state.todos,
    (_state: RootState, todoId: number) => todoId,
    (todos, todoId) => todos.find(todo => todo.id === todoId),
  )

export const Detail = () => {
  const { params } = useRoute<any>()

  const selectTodoWithId = useMemo(makeTodosWithIdSelector, [])
  const todo = useSelector<RootState, Todo | undefined>(state =>
    selectTodoWithId(state, params.todoId),
  )
  const dispatch = useDispatch()
  const onToggleTodo = useCallback(() => {
    if (!todo) return

    dispatch(toggleTodo(todo.id))
  }, [dispatch, todo])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{todo?.title}</Text>
          <Text style={styles.completed}>{todo?.completed ? '✅' : '❌'}</Text>
        </View>
        <Text style={styles.description}>{todo?.description}</Text>
      </View>
      <TouchableOpacity style={styles.footer} onPress={onToggleTodo}>
        <Text style={styles.markAs}>
          {todo?.completed ? 'MARK AS NOT DONE' : 'MARK AS DONE'}
        </Text>
      </TouchableOpacity>
      <Separator />
    </SafeAreaView>
  )
}
