const express = require('express')
const { authUser, authRole } = require('./authUser')
const app = express()
const { users, ROLE } = require('./data')
const grievanceRouter = require('./routes/grievance')

app.use(express.json())
app.use(setUser)
app.use('/grievances', grievanceRouter)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/dashboard', authUser ,(req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin', authUser , authRole(ROLE.ADMIN) ,(req, res) => {
  res.send('Admin Page')
})

function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(3001)