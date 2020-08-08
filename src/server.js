const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const device = require('express-device')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.use(device.capture())
    server.get('*', (req, res) => {
        return handle(req, res)
    })
    server.listen(3000, err => {
        if (err) throw err
        console.log('Server ready on http://localhost:3000')
    })
})
