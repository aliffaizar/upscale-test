const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: '.env.test' })
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test'

beforeAll(async () => {
  await mongoose.connect(MONGO_URI)
}, 10000)

afterAll(async () => {
  const collections = await mongoose.connection.db.collections()
  for (let collection of collections) {
    await collection.deleteMany()
  }
  await mongoose.connection.close()
}, 10000)
