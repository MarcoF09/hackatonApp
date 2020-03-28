import { Actions } from '../actions/todos'
import { AnyAction } from 'redux'
import { Todo } from 'src/types/todo'

export type TodosState = Todo[]

export const todos = (state: TodosState = [], action: AnyAction) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          description: action.description,
          id: action.id,
          title: action.title,
        },
      ]
    case Actions.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      )
    default:
      return state
  }
}
