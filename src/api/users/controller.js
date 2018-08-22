const User = require('./model')

exports.read = () => User.find()
exports.create = ({ body = {} } = {}) => User.create(body)
