const express = require('express')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express')

const docs = require('../docs')
const tasks = require('./routes/tasks')
const { createTask } = require('./controllers/task.controller')
const { errorMiddleware } = require('./middlewares/error.middleware')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

app.use('/tasks', tasks)
app.post('/task', createTask)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(docs))

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' })
})
app.use(errorMiddleware)

module.exports = { app }
