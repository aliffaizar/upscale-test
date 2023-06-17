// eslint-disable-next-line no-unused-vars
exports.errorMiddleware = (err, req, res, next) => {
  const { status = 500, message = 'Something broke!' } = err
  res.status(status).json({ message })
}
