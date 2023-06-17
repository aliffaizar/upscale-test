const Task = require('../models/task.model')

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (error) {
    next(error)
  }
}

exports.createTask = async (req, res, next) => {
  try {
    const { title } = req.body
    if (!title) return res.status(400).json({ message: 'Title is required' })
    const task = new Task(req.body)
    const createdTask = await task.save()
    res.status(201).json(createdTask)
  } catch (error) {
    next(error)
  }
}

exports.getTask = async (req, res, next) => {
  const { id } = req.params
  try {
    const task = await Task.findById(id)
    if (!task) return res.status(404).json({ message: `Task ${id} not found` })
    res.json(task)
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: `Task ${id} not found` })
    }
    next(error)
  }
}

exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true })
    if (!task)
      return res.status(404).json({ message: `Task with id: ${id} not found` })
    res.json(task)
  } catch (error) {
    next(error)
  }
}

exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const task = await Task.findByIdAndDelete(id)
    console.log(task)
    if (!task) return res.status(404).json({ message: `Task ${id} not found` })
    res.status(204).json({ message: `Task with id: ${task.id} deleted` })
  } catch (error) {
    next(error)
  }
}
