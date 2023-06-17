const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id
        delete ret._id
      },
    },
  },
)

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
