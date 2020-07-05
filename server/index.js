const { createServer } = require('http')
const { parse } = require('url')

const bodyParser = require('body-parser')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const { send } = require('process')
const moviesData = require(filePath)

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json())

  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData)
  })

  server.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = moviesData.find(movie => movie.id === id)
    return res.json(movie)
  })

  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body
    moviesData.push(movie)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, err => {
      if (err) {
        return res.status(422).send(err)
      }
      return res.json('Movie added.')
    })
    // return res.json({ ...movie, createdTime: 'today', author: 'hunter' })
  })

  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params

    const movieIndex = moviesData.findIndex(movie => movie.id === id)
    moviesData.splice(movieIndex, 1)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, err => {
      if (err) {
        return res.status(422).send(err)
      }
      return res.json('Movie added.')
    })
  })

  server.patch('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = req.body
    const movieIndex = moviesData.findIndex(movie => movie.id === id)

    moviesData[movieIndex] = movie

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, err => {
      if (err) {
        return res.status(422).send(err)
      }
      return res.json(movie)
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000

  server.listen(PORT, err => {
    if (err) throw err
    console.log('ready on port ' + PORT)
  })
})
