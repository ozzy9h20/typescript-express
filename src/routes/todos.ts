import { Router } from 'express'
import todoController from '../controllers/todos'

const todoRoutes = Router()

todoRoutes.post('/', todoController.createTodo)

todoRoutes.get('/')

todoRoutes.patch('/:id')

todoRoutes.delete('/:id')

export default todoRoutes
