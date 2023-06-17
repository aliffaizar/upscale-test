const express = require('express')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express')

const docs = require('../docs')
const tasks = require('./routes/tasks')
const { connect } = require('./configs/dastabase')
const { createTask } = require('./controllers/task.controller')
const { errorMiddleware } = require('./middlewares/error.middleware')
const { PORT } = require('./configs/env-config')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

app.use('/tasks', tasks)
app.post('/task', createTask)

app.use('/', swaggerUi.serve, swaggerUi.setup(docs))
app.use(errorMiddleware)

app.listen(PORT, async () => {
  await connect()
  console.log('Server is running on port 3000')
})
