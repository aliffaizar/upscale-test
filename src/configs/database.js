const mongoose = require('mongoose')

async function connect(url) {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Database connected')
  } catch (err) {
    console.log(err)
  }
}

module.exports = { connect }
