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
    createdTodo : newTodo
  })
}

const todoController = {
  createTodo,
}

export default todoController
