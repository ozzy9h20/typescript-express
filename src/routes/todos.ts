import { Router } from 'express'

const todoRoutes = Router()

todoRoutes.post('/')

todoRoutes.get('/')

todoRoutes.patch('/:id')

todoRoutes.delete('/:id')

export default todoRoutes
