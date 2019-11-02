const express = require('express')
const teams = require('./teams.json')
const app = express()

app.listen(1337, () => { console.log("Listening on 1337..")})



app.all('*', (req, res) => {
    res.sendStatus(404)
})