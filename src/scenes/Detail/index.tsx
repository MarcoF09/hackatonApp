import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native'
// import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { RootState } from 'src/store'
import { Separator } from '../../components/Separator'
import { styles } from './styles'
import { Todo } from 'src/types/todo'
// import { toggleTodo } from '../../store/actions/todos'
// import { useRoute } from '@react-navigation/native'

const makeTodosWithIdSelector = () =>
  createSelector<RootState, number, Todo[], number, Todo | undefined>(
    state => state.todos,
    (_state: RootState, todoId: number) => todoId,
    (todos, todoId) => todos.find(todo => todo.id === todoId),
  )

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
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.commonText}>Address</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.commonText}>24/7</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.commonText}>Phone</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.commonText}>Instagram</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.commonText}>Whatsapp</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.commonText}>Facebook</Text>
            </View>
          </View>
        </View>
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
        <ImageBackground
          source={require('../../assets/home.jpg')}
          style={{ height: 150, margin: 15 }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                paddingHorizontal: 20,
                color: 'white',
                textAlign: 'center',
              }}
            >
              Descripcion
            </Text>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/restaurant.jpg')}
          style={{ height: 150, margin: 15 }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                paddingHorizontal: 20,
                color: 'white',
                textAlign: 'center',
              }}
            >
              Descripcion
            </Text>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/experiences.jpg')}
          style={{ height: 150, margin: 15 }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                paddingHorizontal: 20,
                color: 'white',
                textAlign: 'center',
              }}
            >
              Descripcion
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}
