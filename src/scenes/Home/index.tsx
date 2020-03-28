import { FlatList, ListRenderItemInfo, SafeAreaView } from 'react-native'
import React, { useCallback } from 'react'
import { createSelector } from 'reselect'
import { ListFooter } from './ListFooter'
import { RootState } from 'src/store'
import { Route } from '../../navigation/Route'
import { Separator } from '../../components/Separator'
import { styles } from './styles'
import { Todo } from '../../types/todo'
import { TodoItem } from './TodoItem'
import { useNavigation } from '@react-navigation/native'
import { useNavigationItems } from '../../hooks/useNavigationItems'
import { useSelector } from 'react-redux'

const getTodos = createSelector<RootState, Todo[], Todo[]>(
  state => state.todos,
  todos => todos,
)

export const Home = () => {
  const navigation = useNavigation()
  useNavigationItems({
    onPressRight: () => navigation.navigate(Route.NEW_TODO),
    styleRight: {
      fontSize: 30,
    },
    titleRight: '+',
  })
  const onPressItem = useCallback(
    (todo: Todo) => () => {
      navigation.navigate(Route.DETAIL, {
        todoId: todo.id,
      })
    },
    [navigation],
  )
  const todos = useSelector(getTodos)

  const renderItem = ({ item }: ListRenderItemInfo<Todo>) => (
    <TodoItem {...item} onPress={onPressItem(item)} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        testID="TODO_LIST"
      />
      <ListFooter />
    </SafeAreaView>
  )
}
