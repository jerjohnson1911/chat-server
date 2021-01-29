const express = require('express')
const mc = require('./controllers/messages_controller')
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

// const messageBaseUrl = "/api/messages"
// app.post(messageBaseUrl, mc.create)
// app.get(messageBaseUrl, mc.read)
// app.put(`${messageBaseUrl}/:id`, mc.update)
// app.delete(`${messageBaseUrl}/:id`, mc.delete)

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)

const port = 3001

app.listen(port, () => console.log(`Server is running on port ${port}`))