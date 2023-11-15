import { Router } from 'express'
import todoController from '../controllers/todos'

const todoRoutes = Router()

todoRoutes.post('/', todoController.createTodo)

todoRoutes.get('/', todoController.getTodos)

todoRoutes.patch('/:id', todoController.updateTodo)

todoRoutes.delete('/:id', todoController.deleteTodo)

export default todoRoutes
