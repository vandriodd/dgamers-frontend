import { TODO_FILTERS } from './consts'

export interface TodoType {
  id: number
  title: string
  description: string
  completed: boolean | number
}

export type TodoCreate = (todo: Omit<TodoType, 'id' | 'completed'>) => void
export type TodoDelete = (todo: Pick<TodoType, 'id'>) => void
export type TodoEdit = (
  todo: Pick<TodoType, 'id' | 'title' | 'description'>
) => void
export type TodoToggleCompleted = (
  todo: Pick<TodoType, 'id' | 'completed'>
) => void

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
export type FilterChangeType = (filter: FilterValue) => void
