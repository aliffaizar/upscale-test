const { app } = require('./app')
const { connect } = require('./configs/database')
const { PORT, MONGO_URI } = require('./configs/env-config')

const start = async () => {
  if (!MONGO_URI) {
    throw new Error('MONGO_URI must be provided')
  }
  try {
    await connect(MONGO_URI)
    app.listen(PORT || 3000, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
