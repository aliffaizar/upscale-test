const mongoose = require('mongoose')
const { MONGO_URI } = require('./env-config')

async function connect() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Database connected')
  } catch (err) {
    console.log(err)
  }
}

module.exports = { connect }
