import { createStore } from 'redux'
import { rootReducer } from './reducers'
import { TodosState } from './reducers/todos'

export interface RootState {
  todos: TodosState
}

export const store = createStore(rootReducer)
