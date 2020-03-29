import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native'
// import { useDispatch, useSelector } from 'react-redux'
// import { createSelector } from 'reselect'
// import { RootState } from 'src/store'
import { Separator } from '../../components/Separator'
import { styles } from './styles'
// import { Todo } from 'src/types/todo'
import { DetailRow } from '../../components/DetailRow'
import { ImageItem } from '../../components/ImageItem'

// import { toggleTodo } from '../../store/actions/todos'
// import { useRoute } from '@react-navigation/native'

// const makeTodosWithIdSelector = () =>
//   createSelector<RootState, number, Todo[], number, Todo | undefined>(
//     state => state.todos,
//     (_state: RootState, todoId: number) => todoId,
//     (todos, todoId) => todos.find(todo => todo.id === todoId),
//   )

export const Detail = () => {
  // const { params } = useRoute<any>()

  // const selectTodoWithId = useMemo(makeTodosWithIdSelector, [])
  // const todo = useSelector<RootState, Todo | undefined>(state =>
  //   selectTodoWithId(state, params.todoId),
  // )
  // const dispatch = useDispatch()
  // const onToggleTodo = useCallback(() => {
  //   if (!todo) return

  //   dispatch(toggleTodo(todo.id))
  // }, [dispatch, todo])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Nombre</Text>
        </View>
        <>
          <DetailRow leftText="Address" rightText="24/7" />
          <DetailRow leftText="Phone" rightText="Instagram" />
          <DetailRow leftText="Whatsapp" rightText="Facebook" />
        </>
      </View>
      <Separator />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.description}>
            "Esto es una descripcion larga larga larga, ptm porque no puse lorem
            ipsum"
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.boldText}>Delivery en: </Text>
          <Text style={styles.commonText}>Parque rodo, Palermo, Cordon</Text>
        </View>
      </View>
      <Separator />
      <ScrollView scrollEventThrottle={16}>
        <ImageItem
          imageUri={require('../../assets/home.jpg')}
          text="Descripcion"
        />
        <ImageItem
          imageUri={require('../../assets/restaurant.jpg')}
          text="Descripcion"
        />
        <ImageItem
          imageUri={require('../../assets/experiences.jpg')}
          text="Descripcion"
        />
      </ScrollView>
    </SafeAreaView>
  )
}
