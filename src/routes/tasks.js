const router = require('express').Router()

const {
  getTasks,
  updateTask,
  getTask,
  deleteTask,
} = require('../controllers/task.controller')

router.get('/', getTasks)
router.get('/:id', getTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
