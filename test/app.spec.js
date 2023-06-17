const { app } = require('../src/app')
const supertest = require('supertest')

const task = { title: 'Task 1', description: 'Description 1' }

it('should return 404 for non-existent route', async () => {
  const response = await supertest(app).get('/non-existent-route')
  expect(response.status).toBe(404)
  expect(response.body.message).toBe('Route not found')
})

it('should create task', async () => {
  const response = await supertest(app).post('/task').send(task)
  expect(response.status).toBe(201)
  task.id = response.body.id
  expect(response.body.title).toBe('Task 1')
  expect(response.body.description).toBe('Description 1')
  expect(response.body.completed).toBe(false)
})

it('should return 400 for invalid task', async () => {
  const task = { description: 'Description 1' }
  const response = await supertest(app).post('/task').send(task)
  expect(response.status).toBe(400)
  expect(response.body.message).toBe('Title is required')
})

it('should return 200 for get all tasks', async () => {
  const response = await supertest(app).get('/tasks')
  expect(response.status).toBe(200)
  expect(response.body.length).toBe(1)
  expect(response.body[0].title).toBe('Task 1')
  expect(response.body[0].description).toBe('Description 1')
  expect(response.body[0].completed).toBe(false)
})

it('should return 200 for get task by id', async () => {
  const response = await supertest(app).get(`/tasks/${task.id}`)
  expect(response.status).toBe(200)
  expect(response.body.title).toBe('Task 1')
  expect(response.body.description).toBe('Description 1')
  expect(response.body.completed).toBe(false)
})

it('should return 404 for get task by non-existent id', async () => {
  const id = '123'
  const response = await supertest(app).get('/tasks/123')
  expect(response.status).toBe(404)
  expect(response.body.message).toBe(`Task ${id} not found`)
})

it('should return 200 for update task', async () => {
  const response = await supertest(app)
    .patch(`/tasks/${task.id}`)
    .send({ title: 'Task 2' })
  expect(response.status).toBe(200)
  expect(response.body.title).toBe('Task 2')
  expect(response.body.description).toBe('Description 1')
  expect(response.body.completed).toBe(false)
})

it('should return 404 for update task by non-existent id', async () => {
  const id = '123'
  const response = await supertest(app)
    .patch(`/tasks/${id}`)
    .send({ title: 'Task 2' })
  expect(response.status).toBe(404)
  expect(response.body.message).toBe(`Task ${id} not found`)
})

it('should return 200 for delete task', async () => {
  const response = await supertest(app).delete(`/tasks/${task.id}`)
  expect(response.status).toBe(204)
})
