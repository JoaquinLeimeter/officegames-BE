const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

const { getUser, getUserList, addUser, deleteUser } = controller

router.get('/:id', getUser)
router.get('/', getUserList)
router.post('/', addUser)
router.delete('/:id', deleteUser)

module.exports = router
