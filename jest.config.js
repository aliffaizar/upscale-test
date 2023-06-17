module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test/jest.setup.js'],
}
