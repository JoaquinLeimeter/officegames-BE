require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/index')
const { Server } = require('ws')
const cors = require('cors')

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE_URL, {dbName: 'officegames'} ,(error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log('🔴 Database error: ', error)
  } else {
    // eslint-disable-next-line no-console
    console.log('🟢 Database connected')
  }
})

app.use('/api', router)

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

//connection to web Socket, communication with FE
const wss = new Server({ server })
wss.on('connection', function (ws, req) {
  ws.on('message', (message) => {
    let dataString = message.toString()
  })
})
