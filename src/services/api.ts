import { dgamers } from '../api/dgamers'
import { TodoType } from '../types'

export async function getTodos(): Promise<[string] | [null, TodoType[]]> {
  try {
    const res = await dgamers.get<{ response: TodoType[] }>('/tasks')
    return [null, res.data.response]
  } catch (err) {
    if (err instanceof Error) {
      return [err.message]
    }

    return ['Unknown error']
  }
}

export async function createTodo({
  title,
  description
}: Pick<TodoType, 'title' | 'description'>): Promise<
  [string] | [null, TodoType]
> {
  try {
    const res = await dgamers.post<{ response: TodoType }>('/tasks', {
      title,
      description
    })
    return [null, res.data.response]
  } catch (err) {
    if (err instanceof Error) {
      return [err.message]
    }

    return ['Unknown error']
  }
}

export async function deleteTodo({
  id
}: Pick<TodoType, 'id'>): Promise<[string] | [null, TodoType]> {
  try {
    const res = await dgamers.delete<{ response: TodoType }>(`/tasks/${id}`)
    return [null, res.data.response]
  } catch (err) {
    if (err instanceof Error) {
      return [err.message]
    }

    return ['Unknown error']
  }
}

export async function updateTodo({
  id,
  title,
  description
}: Pick<TodoType, 'id' | 'title' | 'description'>): Promise<
  [string] | [null, TodoType]
> {
  try {
    const res = await dgamers.put<{ response: TodoType }>(`/tasks/${id}`, {
      title,
      description
    })
    return [null, res.data.response]
  } catch (err) {
    if (err instanceof Error) {
      return [err.message]
    }

    return ['Unknown error']
  }
}

export async function toggleCompleted({
  id,
  completed
}: Pick<TodoType, 'id' | 'completed'>): Promise<[string] | [null, TodoType]> {
  try {
    const res = await dgamers.put<{ response: TodoType }>(`/tasks/${id}`, {
      completed
    })
    return [null, res.data.response]
  } catch (err) {
    if (err instanceof Error) {
      return [err.message]
    }

    return ['Unknown error']
  }
}
