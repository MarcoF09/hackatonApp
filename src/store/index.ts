import { createStore } from 'redux'
import { rootReducer } from './reducers'
import { CompaniesState } from './reducers/companies'

export interface RootState {
  companies: CompaniesState
}

export const store = createStore(rootReducer)
