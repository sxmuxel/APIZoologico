const express = require('express')
const app = express()
const port = 3000

app.get('/prueba', (req, res) => {
    res.send('HolaMundo')
})

app.listen(port, () => {
    console.log('La aplicación se está ejecutando por el puerto ' + port)
})