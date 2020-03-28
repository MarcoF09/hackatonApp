export enum Actions {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
}

let nextTodoId = 0

export const addTodo = (title: string, description: string) => ({
  description,
  id: nextTodoId++,
  title,
  type: Actions.ADD_TODO,
})

export const toggleTodo = (id: number) => ({
  id,
  type: Actions.TOGGLE_TODO,
})
