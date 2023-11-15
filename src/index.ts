import express, { Request, Response, NextFunction } from 'express'
import todoRoutes from './routes/todos'

const app = express()
const port = 8080

app.use('/todos', todoRoutes)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
