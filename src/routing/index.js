const express = require('express')
const router = new express.Router()
const users = require('api/users/routes')

router.get('/', async (req, res) => {
  res.send('Welcome to starter boilerplate express app')
})

router.use('/users', users)

module.exports = router
