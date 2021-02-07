exports.success = (req, res, message, status) => {
  res.status(status || 200).send({
    error: null,
    body: message
  })
} 

exports.error = (req, res, error, status) => {
  res.status(status || 400).send({
    error: error,
    body: null
  })
} 