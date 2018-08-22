const express = require('express')
const router = new express.Router()
const controller = require('./controller')

router.get('/', async (req, res, next) => {
  try {
    const users = await controller.read()
    res.json(users)
  } catch (error) {
    next({ status: 500, message: error.message })
  }
})

router.post('/', async (req, res, next) => {
  try {
    const user = await controller.create(req)
    res.json(user)
  } catch (error) {
    next({ status: 500, message: error.message })
  }
})

module.exports = router
