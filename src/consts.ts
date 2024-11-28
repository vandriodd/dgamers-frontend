export const TODO_FILTERS = {
  ALL: 'all',
  PENDING: 'pending',
  COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    label: 'Todos'
  },
  [TODO_FILTERS.PENDING]: {
    label: 'Pendientes'
  },
  [TODO_FILTERS.COMPLETED]: {
    label: 'Completados'
  }
} as const
