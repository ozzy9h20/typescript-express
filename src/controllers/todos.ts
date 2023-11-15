import { RequestHandler } from 'express'
import { Todo } from '../models/todos'

const TODOS: Todo[] = []

interface CreateTodoReqBody {
  text: string
}

const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as CreateTodoReqBody).text

  const newTodo = new Todo(Math.random().toString(), text)

  TODOS.push(newTodo)

  res.status(201).json({
    message     : 'Created the todo',
    createdTodo : newTodo,
  })
}

const getTodos: RequestHandler = (req, res, next) => {
  res.json(TODOS)
}

const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id

  const updatedText = (req.body as { text: string }).text

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId)

  if (todoIndex < 0) {
    throw new Error('Could not find todo!')
  }

  TODOS[todoIndex] = new Todo(todoId, updatedText)

  res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] })
}

const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId)

  if (todoIndex < 0) {
    throw new Error('Could not find todo!')
  }

  TODOS.splice(todoIndex, 1)

  res.json({ message: 'Todo deleted!' })
}

const todoController = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
}

export default todoController
